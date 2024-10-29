export const articlesList = [
  "React",
  "Nextjs",
  "Javascript",
  "Typescript",
  "Rust",
  "SQL",
];

export const myDefaultUser = {
  name: "Rasoul Hesami Rostami",
  email: "h.rostami.r@gmail.com",
  phone: "+989107608940",
  location: "Iran",
  picture_url: "",
  socialLinks: {
    github: "https://github.com/Rasoul678",
    linkedin: "https://www.linkedin.com/in/rasoul-hesami-rostami",
    stackoverflow:
      "https://stackoverflow.com/users/13294844/rasoul-hesami-rostami",
    telegram: "https://t.me/@RaHeRo",
    medium: "https://medium.com/@hesami-rasoul",
    youtube: "https://www.youtube.com/@rasoulrostami",
  },

  //   instagram: "https://www.instagram.com/rasoulrostami/",
  //   facebook: "https://www.facebook.com/rasoulrostami",
  //   twitter: "https://twitter.com/rasoulrostami",
  //   whatsapp: "https://wa.me/989399138354",
  //   leetcode: "https://leetcode.com/rasoulrostami/",
};

export enum externalLinks {
  JAVASCRIPT = "https://javascript.info/",
  TYPESCRIPT = "https://www.typescriptlang.org/",
  REACTJS = "https://react.dev/",
  NEXTJS = "https://nextjs.org/",
  REDUX = "https://redux.js.org/",
  WEBPACK = "https://webpack.js.org/",
  POSTMAN = "https://www.postman.com/",
  GIT = "https://git-scm.com/",
  DOCKER = "https://www.docker.com/",
  HTML5 = "https://developer.mozilla.org/en-US/docs/Web/HTML",
  CSS5 = "https://developer.mozilla.org/en-US/docs/Web/CSS",
  TAILWINDCSS = "https://tailwindcss.com/",
  WEBASSEMBLY = "https://webassembly.org/",
  RUST = "https://www.rust-lang.org/",
  JEST = "https://jestjs.io/",
  MUT = "https://mut.ac.ir",
  SBU = "https://sbu.ac.ir",
}

export const IFRAME_SRCDOC = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MeBox</title>
    </head>
    <body style='background-color: #fff;'>
        <div id="root"></div>
        <script>
            const handleError = (error) => {
                const root = document.querySelector('#root');
                root.innerHTML = '<div style="color: crimson;"><h4>Runtime Error:</h4>' + error + '</div>';
                console.error(error);
            };

            // async error handling
            window.addEventListener('error', (event) => {
                // cancel default behavior
                event.preventDefault();
                handleError(event.error);
            });

            // sync error handling
            window.addEventListener("message", (event) => {
                try{
                    eval(event.data);
                } catch(error){
                    handleError(error);
                }
            }, false);
        </script>
    </body>
    </html>
`;

export const editorDefault = `// Use "show()" to display something! 🤩 \nshow(<h1 style={{display: "flex", justifyContent: "center", fontFamily: "Ubuntu"}}>Welcome to my Portfolio!</h1>)`;

export const showFunc = `
    import _React from 'react';
    import _ReactDOM from 'react-dom';

    var show = (value) => {
    const rootElement = document.querySelector('#root');
    const root = _ReactDOM.createRoot(rootElement);

    if(typeof value === 'object'){
        if(value.$$typeof && value.props){
        root.render(value);
        }else{
        rootElement.innerHTML = JSON.stringify(value);
        }
    }else{
        rootElement.innerHTML = value;
    }

    }
`;
