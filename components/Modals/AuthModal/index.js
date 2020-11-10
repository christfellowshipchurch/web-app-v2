import AuthModal from './AuthModal';

import Confirm from './AuthConfirm';
import Details from './AuthDetails';
import Identity from './AuthIdentity';
import Success from './AuthSuccess';

const Screens = {};
Screens.Confirm = Confirm;
Screens.Details = Details;
Screens.Identity = Identity;
Screens.Success = Success;

export { AuthModal as default, Screens };
