import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import authReducer, { moduleName as authModule } from '../ducks/auth'
import userReducer, { moduleName as userModule } from '../ducks/user'

export default combineReducers({
  [authModule]: authReducer,
  form,
  [userModule]: userReducer
})
