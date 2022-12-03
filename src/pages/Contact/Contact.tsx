import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormType } from "./FormSchema/formSchema";
import {
  ContactForm,
  Container,
  FormField,
  Input,
  Label,
  NameWrapper,
  PageHeading,
  SubmitBtutton,
  Successful,
  TextArea,
  ValidationMessage,
  Wrapper,
} from "./Contact.styles";

export const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormType) => {
    console.log(data);
    setSuccessMessage("message sent. Thank you");
    reset();
  };

  useEffect(() => {
    const messageTimeout = setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
    return () => clearTimeout(messageTimeout);
  }, [successMessage]);
  return (
    <Container>
      <PageHeading>contact us</PageHeading>
      <Wrapper>
        <ContactForm onSubmit={handleSubmit(onSubmit)}>
          <Successful>
            <span
              style={{
                color: "green",
                // textAlign: "center",
                position: "absolute",
                top: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {successMessage}
            </span>
          </Successful>
          <FormField>
            <Label htmlFor="subject">
              <Input
                type="text"
                id="subject"
                placeholder="Subject"
                {...register("subject")}
                color={errors.subject && "#ff6347"}
                borderSize={errors.subject && "2px"}
              />
            </Label>
            {errors.subject && (
              <ValidationMessage>{errors.subject.message}</ValidationMessage>
            )}
          </FormField>
          <NameWrapper>
            <FormField>
              <Label htmlFor="firstName">
                <Input
                  type="text"
                  id="firstName"
                  placeholder="first name"
                  {...register("firstName")}
                  color={errors.firstName && "#ff6347"}
                  borderSize={errors.firstName && "2px"}
                />
              </Label>
              {errors.firstName && (
                <ValidationMessage>
                  {errors.firstName.message}
                </ValidationMessage>
              )}
            </FormField>
            <FormField>
              <Label htmlFor="lastName">
                <Input
                  type="text"
                  id="lastName"
                  placeholder="last name"
                  {...register("lastName")}
                  color={errors.lastName && "#ff6347"}
                  borderSize={errors.lastName && "2px"}
                />
              </Label>
              {errors.lastName && (
                <ValidationMessage>{errors.lastName.message}</ValidationMessage>
              )}
            </FormField>
          </NameWrapper>
          <FormField>
            <Label htmlFor="email">
              <Input
                type="email"
                id="email"
                placeholder="E-mail"
                {...register("email")}
                color={errors.email && "#ff6347"}
                borderSize={errors.email && "2px"}
              />
            </Label>
            {errors.email && (
              <ValidationMessage>{errors.email.message}</ValidationMessage>
            )}
          </FormField>
          <FormField>
            <Label htmlFor="message">
              <TextArea
                id="message"
                placeholder="Message"
                {...register("message")}
                color={errors.message && "#ff6347"}
                borderSize={errors.message && "2px"}
              />
            </Label>
            {errors.message && (
              <ValidationMessage>{errors.message.message}</ValidationMessage>
            )}
          </FormField>
          <SubmitBtutton type="submit">send</SubmitBtutton>
        </ContactForm>
      </Wrapper>
    </Container>
  );
};
