const form = {
  version: "1",
  form: {
    key: "Screen",
    type: "Screen",
    props: {},
    children: [
      {
        key: "MatButton 1",
        type: "MatButton",
        props: {
          children: {
            value: "Hello World!",
          },
          color: {
            value: "secondary",
          },
          variant: {
            value: "contained",
          },
        },
        events: {
          onClick: [
            {
              name: "log",
              type: "common",
            },
          ],
        },
      },
    ],
  },
  localization: {},
  languages: [
    {
      code: "en",
      dialect: "US",
      name: "English",
      description: "American English",
      bidi: "ltr",
    },
  ],
  defaultLanguage: "en-US",
};
export default form;
