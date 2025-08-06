import { AuthButton } from '@shared/ui/buttons';
import { PageLayout } from '@shared/ui/layouts';

export default function LoginPage() {
  return (
    <PageLayout>
      <div className="flex justify-center">
        <AuthButton text="Auth with telegram" />
      </div>
    </PageLayout>
  );
}
