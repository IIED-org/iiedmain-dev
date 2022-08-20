module.exports = {
    theme: {
      typography: {
        DEFAULT: { // this is for prose class
          css: {
            color: theme('colors.yourSpecificColor'), // change global color scheme
            p: {
              fontSize: '14px', // key can be in camelCase...
              'text-align': 'center', // or as it is in css (but in quotes).
            },
            a: {
              // change anchor color and on hover
              color: '#03989E',
                '&:hover': { // could be any. It's like extending css selector
                  color: '#F7941E',
                },
            },
            ul: {
              '> li': {
                 '&::before': { // more complex example - add before to an li element.
                    content: '',
                    ....,
                 },
               },
            },
          },
        },
        lg: { 
          css: {
             ....
          },
        },
      },
    },
  }