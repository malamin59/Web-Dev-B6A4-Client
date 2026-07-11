import { Button } from "@/components/ui/button";

type Props = {
  fillDemo: (user: { email: string; password: string }) => void;
};

export default function DemoLoginButton({ fillDemo }: Props) {
  return (
    <div className="gird grid-cols-3 gap-12 mx-auto">
      <Button
        type="button"
        onClick={() =>
          fillDemo({
            email: "admin@gmail.com",
            password: "123456",
          })
        }
      >
        Demo Admin
      </Button>
      <Button
        type="button"
        onClick={() =>
          fillDemo({
            email: "tutor@gmail.com",
            password: "123456",
          })
        }
      >
        Demo Tutor
      </Button>
      <Button
        type="button"
        onClick={() =>
          fillDemo({
            email: "student@gmail.com",
            password: "123456",
          })
        }
      >
        Demo Student
      </Button>
    </div>
  );
}
