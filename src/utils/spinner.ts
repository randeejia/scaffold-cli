import ora from 'ora';

const spinner = ora();

export const startSpinner = (text: string) => {
  spinner.text = text;
  spinner.start();
};

export const stopSpinner = () => {
  spinner.stop();
};
