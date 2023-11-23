"use client";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Paper,
  Group,
  PaperProps,
  Button,
  Checkbox,
  Stack,
} from "@mantine/core";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";

export function SignInForm(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <Paper
      shadow="xl"
      radius="lg"
      p="xl"
      {...props}
      // className={"filter opacity-80 bg-[#23243C]"}
    >
      {/*       
      <Text size="lg" fw={500}>
        Welcome to Mantine, {type} with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" /> */}

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack gap={"sm"}>
          <FloatingLabelInput
            // label="Email"
            placeholder="hello@emss.com"
            required
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
            mt="md"
            radius={"md"}
            size="lg"
          />
          <PasswordInput
            required
            // label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
            radius="md"
            size="lg"
            // className="bg-[#434459]"
          />

          {type === "register" && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group justify="center" align="center" mt="xl">
          <Button
            type="submit"
            variant="filled"
            radius="xl"
            color="green"
            px={"50px"}
          >
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
