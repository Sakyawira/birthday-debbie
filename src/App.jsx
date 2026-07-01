import './App.css'


import amelImg from './assets/images/amel.jpg'
import janetImg from './assets/images/janet.jpg'
import jerryImg from './assets/images/jerry.jpg'
import leneImg from './assets/images/lene.jpg'
import theresImg from './assets/images/theres.jpg'
import vinaImg from './assets/images/vina.jpg'
import wilsonImg from './assets/images/wilson.jpg'
import felisImg from './assets/images/felice.jpg'


function App() {
  const highlights = [
    '🌅 Your energy outshines even the Bali sunrise.',
    '✈️ 7,500 km apart, but always near in our hearts.',
    '🎂 Another year of being the best friend anyone could ask for.',
  ]

  const signatures = [
    'With so much love,',
    'from everyone who adores you',
    'Happiest Birthday, Debbie 🎉',
  ]

  const messages = [
    {
      name: 'Darlene',
      images: [leneImg],
      text: 'HAPPIEST BIRTHDAYY TOO YOUUU MY SUNSHINE DEBBOYYY!! i hope your positive energy outshines new zealand’s morning sunrise! with you living your current chapter of life, i pray nothing but all joy, love and peace into your life! always keep on being the debbie i always know but never stop to upgrade yourself to become a better person in Christ! luv u tons, and i know u know bahahhaa all love my splash sis! God bless luvv 💖',
    },
    {
      name: 'Theres',
      images: [theresImg],
      text: 'Happy Birthday Debbie, wishing you all the very best always. May your dreams be achieved this year and may your future be as bright as you. Thank you for being my best friend. I hope that you always be healthy, live a long life, happy and may your work and relationship be smooth and successful. May God and peace always be with you. ❤️',
    },
    {
      name: 'Janet',
      images: [janetImg],
      text: 'hi debbb happy sweet sweet birthday! never in my life would i expect that i will ever have someone i call a best friend. dan gue ga pernah nyangka my best friend is someone as pure, genuine, and kind hearted as you. i’m forever grateful for every milestone we went through together. dari kuliah klinis & skripsian bareng, our hot girls walks, getting to know you and your family, girl’s trip ke singapore bareng, and all our short (sometimes long HAHA) but meaningful catchups we have until now. it makes my heart super full! wherever you are now, i know we’ll meet again when the time’s good, either di nikahan gue (DATENG LU YAA HAHA) ato in another country somewhere - maybe we’ll have a double date next? forever grateful you’re born and being a light that shines for everyone around you. pelan tapi pasti you won’t feel lonely anymore in NZ, because you’re just that warm and loveable! love you 4ever deb!! 💛',
    },
    {
      name: 'Jerry',
      images: [jerryImg],
      text: 'Happy birthday debeee, semogaaa makin betah ya di sana. Rupiah melemah sering2 kesini lah joging lagih.',
    },
    {
      name: 'Amel',
      images: [amelImg],
      text: 'Happy Birthday Deb! Sooo grateful to have a best friend like you. Thank you for always being there through all the highs and lows, and for making uni-life a lot easier & fun along the way. I hope this year brings you lots of happiness with sakyaaa & ur fam, good health, exciting opportunities, and everything you’ve been hoping for. You deserve all the good things coming your way. Love you always, and can’t wait to make more memories together 🥂',
    },
    {
      name: 'Vina',
      images: [vinaImg],
      text: 'happy birthday debboyku 🥺💜 kangen banget beneran!! panjang umur, sehat, bahagia selalu all the best buat lo meskipun lo jauh disana, maacii udah selalu nemenin dan dengerin cerita gw. jangan lupa pulang ke indo biar kita jalan2 lagi ya hihi atau doain gw main kesana ya, GBU!! lophh you',
    },
    {
      name: 'Wilson',
      images: [wilsonImg],
      text: 'Happy birthday debb!! Hope you have a great time in NZ & also with sakya 🤪 all the best for everything you do (career & family). Hope to see u soon!!! God bless you alwaysss!!',
    },
    {
      name: 'Felis',
      images: [felisImg],
      text: 'happy birthday to youuu! 🥰💖 i honestly couldn’t be happier seeing how life has turned out for you in this new chapter. you’re finally living the dream we’ve talked about for years, and it’s so amazing to watch it all come together for you. you deserve all the good things coming your way, and i’ll always be cheering you on and supporting you, even from afar 🤍 ps. please keep making more content!!! i love seeing your updates 🤩 and manifesting our reunion trip soon, okay?',
    },
  ]

  return (
    <main className="page">
      <div className="ambient ambient-left" aria-hidden="true"></div>
      <div className="ambient ambient-right" aria-hidden="true"></div>

      <section className="card" aria-label="Birthday card for Debbie">
        <p className="eyebrow">From all of us who love you</p>
        <h1>Happy Birthday, Debbie!</h1>
        <p className="lead">
          A little corner of love for you, all the way from home.
        </p>

        <div className="highlights" role="list" aria-label="Birthday wishes">
          {highlights.map((item) => (
            <article className="highlight" key={item} role="listitem">
              <span className="spark" aria-hidden="true">✦</span>
              <p>{item}</p>
            </article>
          ))}
        </div>

        <div className="signature-board" aria-label="Signoff">
          {signatures.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <section className="quotes" aria-label="Birthday messages for Debbie">
          <h2>Birthday Messages</h2>
          <p className="quotes-intro">Love notes from your people</p>

          <div className="quote-grid">
            {messages.map((msg, i) => (
              <article className="quote-card" key={i}>
                {msg.images.length > 0 && (
                  <div
                    className={
                      'quote-photos' +
                      (msg.images.length > 1 ? ' quote-photos-multi' : '')
                    }
                  >
                    {msg.images.map((src, j) => (
                      <img key={j} src={src} alt={msg.name || 'memory'} className="quote-photo" />
                    ))}
                  </div>
                )}
                {msg.name && <h3>{msg.name}</h3>}
                <p className="quote-text">{msg.text}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

export default App