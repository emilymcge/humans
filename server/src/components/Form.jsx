import { Fieldset, Field, Input } from '@chakra-ui/react';

export default function Form() {
  return (
    <>
      <Fieldset.Root className='form'>
        <Fieldset.Legend>New Human</Fieldset.Legend>
        <Fieldset.HelperText>Enter new human information</Fieldset.HelperText>
        <Fieldset.Content>
          <Field.Root>
            <Field.Label>First Name</Field.Label>
            <Input
              name='firstName'
              type='firstName'
            />
          </Field.Root>
          <Field.Root>
            <Field.Label>Last Name</Field.Label>
            <Input
              name='lastName'
              type='lastName'
            />
          </Field.Root>
          <Field.Root>
            <Field.Label>Job</Field.Label>
            <Input
              name='job'
              type='job'
            />
          </Field.Root>
        </Fieldset.Content>
      </Fieldset.Root>
      ;{' '}
    </>
  );
}
