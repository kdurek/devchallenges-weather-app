import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Weather App</title>
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
      </Head>

      <main className="">{children}</main>

      <footer className="">
        <p className="pb-4 font-mon text-black text-sm font-semibold">
          <a href="https://github.com/durashere">durashere</a> @{" "}
          <a href="https://devchallenges.io">DevChallenges.io</a>
        </p>
      </footer>
    </div>
  )
}

export default Layout
