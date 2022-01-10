import { Request, RequestHandler, Response } from 'express';
import fetch from 'node-fetch';
import jwtDecode from 'jwt-decode';

import { IUserService, IUserStorageService, userService, userStorageService } from '../services';
import { IUser } from '../database';
import {
  GOOGLE_AUTH_ENDPOINT,
  GOOGLE_NAME,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URL,
  GOOGLE_SCOPE,
  GOOGLE_TOKEN_ENDPOINT,
} from '../constants';

export interface IGoogleUserData {
  sub: string;
  email: string;
  given_name: string;
  family_name: string;
  picture: string;
}

class GoogleOAuth2Controller {
  constructor(userService: IUserService, storageService: IUserStorageService) {
    const scope = encodeURIComponent(GOOGLE_SCOPE.join(' '));
    const authRedirectUrl = `${GOOGLE_AUTH_ENDPOINT}?response_type=code&client_id=${GOOGLE_CLIENT_ID}&scope=${scope}`;

    this.entranceHandler = (req: Request, res: Response) => {
      const redirectUrl = encodeURIComponent(GOOGLE_REDIRECT_URL);

      res.redirect(`${authRedirectUrl}&redirect_uri=${redirectUrl}`);
    };

    this.outputHandler = async (req: Request, res: Response) => {
      try {
        const { code } = req.query;
        const result = await fetch(GOOGLE_TOKEN_ENDPOINT, {
          body: JSON.stringify({
            client_id: GOOGLE_CLIENT_ID,
            client_secret: GOOGLE_CLIENT_SECRET,
            code,
            grant_type: 'authorization_code',
            redirect_uri: GOOGLE_REDIRECT_URL,
          }),
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
        });

        const {
          sub: authId,
          email,
          given_name: firstName,
          family_name: lastName,
          picture: photoUrl,
        } = <IGoogleUserData>jwtDecode(((await result.json()) as { id_token: string }).id_token);

        const user = await userService.createOrUpdate({
          authId,
          email,
          firstName,
          lastName,
          photoUrl,
          provider: GOOGLE_NAME,
        });

        storageService.setData(req.session, <IUser>user);

        res.redirect('/');
      } catch (error) {
        res.redirect('/failure');
      }
    };
  }

  public entranceHandler: RequestHandler;
  public outputHandler: RequestHandler;
}

export type IGoogleOAuth2Controller = GoogleOAuth2Controller;

export const googleOAuth2Controller = new GoogleOAuth2Controller(userService, userStorageService);
