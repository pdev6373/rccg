import {Success} from '../../components/auth';

export default function ResetPasswordSuccessful({
  navigation,
}: {
  navigation: any;
}) {
  return (
    <Success
      title="Congratulations"
      message="You have successfully changed your password"
      buttonText="Login to account"
      action={navigation.navigate}
    />
  );
}
