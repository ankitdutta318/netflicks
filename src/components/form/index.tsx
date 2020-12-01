import React from 'react';
import {
  Container,
  Error,
  Base,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from './styles';

interface IFormProps {
  children: React.ReactNode;
}

interface IFormErrorProps {
  children: React.ReactNode;
}

interface IFormBaseProps {
  method?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

interface IFormTitleProps {
  children: React.ReactNode;
}

interface IFormTextProps {
  children: React.ReactNode;
}

interface IFormTextSmallProps {
  children: React.ReactNode;
}

interface IFormLinkProps {
  to: string;
  children: React.ReactNode;
}

interface IFormInputProps {
  placeholder?: string;
  value: string | undefined;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

interface IFormSubmitProps {
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  children: React.ReactNode;
}

export default function Form({ children, ...restProps }: IFormProps) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Error = function FormError({ children, ...restProps }: IFormErrorProps) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...restProps }: IFormBaseProps) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }: IFormTitleProps) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }: IFormTextProps) {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({
  children,
  ...restProps
}: IFormTextSmallProps) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, ...restProps }: IFormLinkProps) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Input = function FormInput({ children, ...restProps }: IFormInputProps) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({
  children,
  ...restProps
}: IFormSubmitProps) {
  return <Submit {...restProps}>{children}</Submit>;
};
