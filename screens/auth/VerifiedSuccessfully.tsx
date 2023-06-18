import {Success} from '../../components/auth';

export default function VerifiedSuccessfully({navigation}: {navigation: any}) {
  return (
    <Success
      title="Congratulations"
      message="Voila! You have successfully Verified your account."
      buttonText="Get Started"
      action={navigation.navigate}
    />
  );
}
