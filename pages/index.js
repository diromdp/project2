import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="keywords"
          content="franchise minuman, new story indonesia, minuman kekinian, franchise minuman terpopuler saat ini, minuman, waralaba minuman, franchise, peluang, usaha, peluang, bisnis, minuman, terpopuler, waralaba, murah, franchise indonesia, franchise minuman coklat, info franchise waralaba, waralaba terlaris, waralaba terpopuler, franchise, franchise terlaris, franchise terpopuler, franchise minuman coklat"
        />
        <meta name="description" content=" New Story Indonesia " />
        <meta name="google-site-verification" content="VuPl2MMLgcC_iGNbtSHTefk-DnQv9sf3wz6GaI8SQP4" />
        <title>New Story Indonesia</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-175434830-1"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'UA-175434830-1');`,
          }}
        />
      </Head>

      <main>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 offset-md-0 col-sm-12 p-0">
              <img src="/img/img1.jpg" alt="proposal1" className="img-fluid" />
            </div>
            <div className="col-md-9 offset-md-0 col-sm-12 p-0">
              <img src="/img/img2.jpg" alt="proposal2" className="img-fluid" />
            </div>
            <div className="col-md-9 offset-md-0 col-sm-12 p-0">
              <img src="/img/img3.jpg" alt="proposal3" className="img-fluid" />
            </div>
            <div className="col-md-9 offset-md-0 col-sm-12 p-0">
              <img src="/img/img4.jpg" alt="proposal4" className="img-fluid" />
            </div>
            <div className="col-md-9 offset-md-0 col-sm-12 p-0">
              <img src="/img/img5.jpg" alt="proposal5" className="img-fluid" />
            </div>
            <div className="col-md-9 offset-md-0 col-sm-12 p-0">
              <img src="/img/img6.jpg" alt="proposal6" className="img-fluid" />
            </div>
            <div className="col-md-9 offset-md-0 col-sm-12 p-0">
              <img src="/img/img7.jpg" alt="proposal7" className="img-fluid" />
            </div>
            <div className="col-md-9 offset-md-0 col-sm-12 p-0">
              <img src="/img/img8.jpg" alt="proposal8" className="img-fluid" />
            </div>
            <div className="col-md-9 offset-md-0 col-sm-12 p-0">
              <img src="/img/img9.jpg" alt="proposal9" className="img-fluid" />
            </div>
            <div className="col-md-9 offset-md-0 col-sm-12 p-0">
              <img src="/img/img10.jpg" alt="proposal10" className="img-fluid" />
            </div>
            <div className="col-md-9 offset-md-0 col-sm-12 p-0">
              <img src="/img/img11.jpg" alt="proposal11" className="img-fluid" />
            </div>
            <div className="col-md-9 offset-md-0 col-sm-12 p-0">
              <img src="/img/img12.jpg" alt="proposal12" className="img-fluid" />
            </div>
            <div className="col-md-9 offset-md-0 col-sm-12 p-0">
              <img src="/img/img13.jpg" alt="proposal13" className="img-fluid" />
            </div>
            <div className="col-md-9 offset-md-0 col-sm-12 p-0">
              <img src="/img/img14.jpg" alt="proposal14" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className={styles.floating}>
          <a
            href="https://api.whatsapp.com/send?phone=+6285700049528&text=Halo admin New Story Indonesia! Saya dapat info promo franchise melalui website New Story Indonesia, saya ingin tahu informasi detail mengenai promo franchise New Story, Terimakasih"
            target="_blank"
          >
            <img src="/img/whatsapp.png" />
          </a>
        </div>
      </main>
    </div>
  );
}
