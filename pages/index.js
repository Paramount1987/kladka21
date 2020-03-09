import Head from 'next/head';

import Header from '../components/Header';
import Intro from '../components/Intro';

const Home = () => (
  <div className="">
    <Head>
      <title>Главная</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
    </Head>

    <Header />
    <Intro />

    <main className="container pt-1">
      <p className="lead my-5">
        Каменщик - это специалист, участвующий в возведении и ремонте жилых домов, мостов,
        промышленных и других сооружений в Чувашии. Каменщик, Бригада каменщиков производит кладку несущих стен,
        фундамента, арок, сводок, колонн, участвует в установке оконных и дверных коробок, производит
        конопатку и заливку швов в сборных железобетонных конструкциях.
      </p>

      <div className="row">
        <div className="col-6">
          <h4>Перечень работ, которые выполняет наша Бригада каменщиков:</h4>
          <ul>
            <li>монтаж железобетонных перекрытий и плит</li>
            <li>изготовление монолитных перемычек</li>
            <li>заделка "пустот" новым кирпичом</li>
            <li>забутовочная кладка кирпича</li>
            <li>лицевая кладка кирпича</li>
            <li>кладка перегородок</li>
            <li>кладка пеноблоков</li>
            <li>изготовление арок</li>
            <li>кладка газобетона</li>
            <li>кладка паратерма</li>
            <li>кладка столбов</li>
          </ul>
        </div>
        <div className="col-6">
          <h4>Бригада каменщиков при кладке стен:</h4>
          <ul>
            <li>выдерживает необходимую толщину и ровность шва,</li>
            <li>проверяет соответствие горизонтальности и вертикальности рядов проектным требованиям,</li>
            <li>проектирует  возведение углов и изгибов стены из целых, половинок и четвертинок кирпича.</li>
          </ul>
          <p>Каменщик, участвует в ремонте: выполняет заделку "пустот" новым кирпичом, при соблюдении "швов" и "стыка" старой кладки.</p>
        </div>

        <div className="col-12">
          <h4>Наши работы:</h4>
        </div>
      </div>
    </main>

    <footer>

    </footer>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
