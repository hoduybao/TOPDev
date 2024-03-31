import UserSubmitButton from "../../components/ui/button/UserSubmitButton";
import CustomPasswordInput from "../../components/ui/form/CustomPasswordInput";
import { CustomTextInput } from "../../components/ui/form/CustomTextInput";

const AdminLogin = () => {
    return (
        <form>
            <h3 className='flex flex-col'>Sign In</h3>

            <div className="mb-3">
                <CustomTextInput type="email" label="Email" placeholder="Enter email"/>
            </div>
            <div className="mb-3">
                <CustomPasswordInput label="Password"/>
            </div>
            <div className="d-grid">
                <UserSubmitButton name="Log in" isFilled isSmall />
            </div>
            <p className="text-right">
                <a href="#">Forgot password?</a>
            </p>
        </form>
    );
};
export default AdminLogin;