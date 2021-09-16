import Document, { Html, Head, Main, NextScript } from "next/document";
import Safe from "react-safe"


export default class extends Document {

  render() {
    const { styles } = this.props;

    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="application-name" content="App" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <Safe.script>{
          `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/6134c96e649e0a0a5cd4b3fb/1fer35mep';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
          </script>
          `
        }
        </Safe.script>
      </Html>
    );
  }
}
