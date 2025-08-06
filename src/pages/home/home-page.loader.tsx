import { redirect } from 'react-router-dom';

import { pathKeys } from '@shared/router';

export default async function homePageLoader() {
  return redirect(pathKeys.login);
}
