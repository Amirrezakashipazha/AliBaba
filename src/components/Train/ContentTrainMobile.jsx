import React, { useState } from "react";
import { Link } from "react-router-dom";
import BoxBlitTrain from "./BoxBlitTrain";
import BoxMajale from "./BoxMajale";
import BoxTrain from "./BoxTrain";
const ContentTrainMobile = () => {
  const [read, setread] = useState("بیشتر بخوانید");

  const Box = [
    {
      bg: require("../../assets/image/Train/train1boxs.jpg"),
      title: "خرید اینترنتی بلیط قطار",
      matn: (
        <div>
          خرید اینترنتی بلیط قطار مزایای زیادی دارد، از جمله: مقایسه‌ قیمت بلیط
          قطارهای مختلف، انتخاب دقیق ساعت حرکت قطار، انتخاب از بین قطارهای متنوع
          شرکت‌های ریلی، پرداخت سریع و آسان با کارت شتابی، استرداد کاملا آنلاین
          بلیط قطار، خرید مطمئن بلیط مقاصد پرسفر، رزرو آسان بلیط قطار در فصل‌های
          شلوغ و مطلع شدن از پیش‌فروش قطارها از طریق ایمیل. شما به راحتی
          می‌توانید با مراجعه به <Link to="/">www.alibaba.ir</Link>
          بلیط قطار خود را به آسانی و با چند کلیک ساده خریداری کنید.
        </div>
      ),
    },
    {
      bg: require("../../assets/image/Train/train2boxs.jpg"),
      title: "استرداد آنلاین بلیط قطار",
      matn: (
        <div>
          در گذشته، استرداد بلیط قطار از دغدغه‌های اصلی مسافران بود. حتی
          مسافرانی که بلیط را آنلاین می‌خریدند، برای استرداد آن مجبور بودند به
          صورت حضوری به دفاتر فروش مراجعه کنند. علی‌بابا با فراهم کردن
          زیرساخت‌های لازم، خدمت استرداد آنلاین بلیط قطار را به مسافران ارائه
          می‌کند و شما با مراجعه به حساب کاربری خود دیگری
          <Link to="/">علی‌بابا</Link> با چند کلیک ساده می‌توانید بلیط را به
          صورت کاملا آنلاین استرداد کنید و مبلغ آن را (پس از کسر جریمه‌ کنسلی)
          در حساب بانکی‌تان دریافت کنید.
        </div>
      ),
    },
    {
      bg: require("../../assets/image/Train/train3box.jpg"),
      title: "خرید گروهی",
      matn: (
        <div>
          یکی از دغدغه‌های مسافران قطار، امکان رزرو بلیط برای سفرهای خانوادگی و
          گروهی است. مشتریان علی‌بابا می‌توانند تا سقف ۶ بلیط برای ۶ نفر را در
          یک سفارش و با یک بار پرداخت خریداری کنند. همچنین در صورتی که قصد خرید
          بلیط برای تعداد مسافران بیشتری را داشته باشید و می‌خواهید صندلی‌هایتان
          در کنار هم باشد، کافیست با پشتیبانی علی‌بابا تماس بگیرید. در کنار همه
          این‌ها، استرداد هر تعداد بلیط در علی‌بابا به راحتی و در کمترین زمان
          ممکن انجام می‌شود.
        </div>
      ),
    },
  ];

  const Box2 = [
    {
      bg: require("../../assets/image/Train/train4box.jpg"),
      title: "کوپه دربست در قطار",
      matn: (
        <div>
          یکی از تفاوت‌های قطار با سایر وسائل نقلیه عمومی کوپه‌های دربست آن است.
          شما می‌توانید کوپه‌های چهارنفره و شش‌نفره را دربست کنید تا به همراه
          خانواده یا دوستان خود سفر راحت‌تری را تجربه کنید. دربست کردن کوپه اصلا
          کار سختی نیست و در طی فرایند خرید اینترنتی بلیط از سایت{" "}
          <Link to="/">علی‌بابا</Link>
          می‌توانید به آسانی بلیط قطار خود را به صورت دربست خریداری کنید. اگر
          گروهی سفر می‌کنید و یا اگر کودکان کم‌سن‌وسال همراه شما هستند، کوپه‌های
          دربست را به شما پیشنهاد می‌کنیم.
        </div>
      ),
    },
    {
      bg: require("../../assets/image/Train/train5box.jpg"),
      title: "بلیط قطار برای سفرهای دانشجویی",
      matn: (
        <div>
          سفر با قطار ارزان است و همین موضوع باعث می‌شود تا مورد توجه دانشجویان
          باشند. به طور معمول دانشجویانی که در شهرهای غیربومی تحصیل می‌کنند به
          صورت پرتکرار سفر می‌کنند و ماهانه حداقل یک بار به شهر خودشان باز
          می‌گردند که قطار یکی از انتخاب‌های اصلی آنهاست؛ چرا که هم قیمت
          به‌صرفه‌ای دارد و هم سفر راحتی را تجربه خواهند کرد.
        </div>
      ),
    },
    {
      bg: require("../../assets/image/Train/train6box.jpg"),
      title: "خرید بلیط قطار برای مسیرهای پرتردد از علی‌بابا",
      matn: (
        <div>
          علی‌بابا با ارائه ظرفیت کامل بر روی مسیرهای پرتردد مثل تهران – مشهد –
          تهران، اصفهان – تهران – اصفهان، یزد – تهران – یزد، تهران – شیراز –
          تهران و... امکان خرید سریع و آسان بلیط قطار، به ویژه در ایام اوج سفر
          مثل نوروز و تابستان را فراهم می‌کند. شما با مراجعه به سامانه
          <Link to="/">علی‌بابا</Link>
          یا نصب اپلیکیشن <Link to="">اندروید</Link> یا <Link to="">ios</Link>
          علی‌بابا می‌توانید با خیال راحت بلیط سفرهای ریلی خود را از علی‌بابا
          خریداری کنید
        </div>
      ),
    },
    {
      bg: require("../../assets/image/Train/train7box.jpg"),
      title: "بلیط قطار تهران - مشهد",
      matn: (
        <div>
          تهران - مشهد پرترددترین مسیر ریلی کشور است که قطارهای تمام شرکت‌های
          ریلی در این مسیر مسافران را جا‌به‌جا می‌کنند. حضور بارگاه امام رضا در
          مشهد، برگزاری سمینارها و همایش‌های مختلف و اجرای پروژه‌های تجاری، این
          مسیر را به یکی از پررونق‌ترین مسیرهای ریلی تبدیل کرده است. در سفرهای
          زیارتی، که اغلب گروهی و به صورت خانوادگی انجام می‌شود، استقبال از قطار
          بسیار زیاد است. قیمت بلیط قطار تهران - مشهد بسته به نوع قطار و شرکت
          ریلی متفاوت است و تقریبا برای تمام سلیقه‌ها از قطارهای لوکس گرفته تا
          قطارهای اتوبوسی، بلیط متناسب با نوع سفر را می‌توان پیدا کرد.
        </div>
      ),
    },
  ];

  const BoxTrainContent = [
    {
      img: require("../../assets/image/Train/raja.jpg"),
      descreption: "قطارهای رجا",
    },
    {
      img: require("../../assets/image/Train/bon-rail.jpg"),
      descreption: "قطارهای بن‌ریل",
    },
    {
      img: require("../../assets/image/Train/fadak-train-bae.jpg"),
      descreption: "قطارهای نوآفرین (فدک)",
    },
    {
      img: require("../../assets/image/Train/noor-reza.jpg"),
      descreption: "قطارهای مسافری نور",
    },
    {
      img: require("../../assets/image/Train/rail-seir-kowthar.jpg"),
      descreption: "قطارهای ریل‌ سیر کوثر",
    },
    {
      img: require("../../assets/image/Train/saba-rail.jpg"),
      descreption: "قطارهای ریل ترابر سبا",
    },
    {
      img: require("../../assets/image/Train/mahtab.jpg"),
      descreption: "قطارهای مهتاب سیر جم",
    },
    {
      img: require("../../assets/image/Train/jopar.jpg"),
      descreption: "قطارهای جوپار",
    },
  ];

  const BoxMajaleContent = [
    {
      img: require("../../assets/image/Train/mashhad-low-cost.jpg"),
      title: "چگونه با کمترین هزینه به مشهد سفر کنیم؟",
      text: "اگر می‌خواهید بلیط قطار مشهد را خریداری کنید اما نگران هزینه‌اش هستید، این نوشتار را بخوانید. برای خرید بلیط ارزان قطار تهران‌ـ مشهد، گزینه‌های مختلفی مقابل شماست؛ از قطارهای اتوبوسی و کوپه‌‌ای.",
    },
    {
      img: require("../../assets/image/Train/luxury-mashhad.jpg"),
      title: "قطارهای لوکس مسیر تهران-مشهد کدام‌ها هستند؟",
      text: "اگر چه اغلب شرکت‌های ریلی در مسیر پر تردد تهران-مشهد قطار دارند،قطار 5 ستاره فدک، قطار زندگی، غزال vip، قطار نورالرضا و غدیر بهترین قطارهای این مسیر هستند",
    },
    {
      img: require("../../assets/image/Train/why-online.jpg"),
      title: "چرا بلیط قطار را آنلاین بخریم؟",
      text: "خرید آنلاین بلیط قطار کار را برای سفر با این وسیله نقلیه ریلی آسان ساخته است. اگر قصد سفر را دارید، می‌توانید با خرید آنلاین بلیط قطار در زمان و هزینه صرفه‌جویی کنید.",
    },
  ];
  return (
    <div className="content-train-desktop content-train-mobile">
      <div className="mb-64">
        <h1> بلیط قطار </h1>
        <p>
          هر کسی که یک بار با قطار سفر کرده باشد می‌داند که قطار امن است و همین
          موضوع آن را به یکی از مناسب‌ترین وسائل نقلیه برای سفر به مقاصد دور و
          نزدیک تبدیل کرده. در سفر با قطار می‌توانید بدون نگرانی از نوسانات
          شرایط جوی، کمبود سوخت، تصادفات و... لحظات آرامی را سپری کنید. در کنار
          این موارد، موسیقی ریتمیک حرکت قطار روی ریل به خودی خود موجب آرامش
          سرنشینان می‌شود؛ حتی بعضی از مسافران ادعا کرده‌اند که این ریتم منظم
          موجب می‌شود تا خواب راحت‌تری در قطار داشته باشند.
          <br />
          علاوه بر امنیت، سفر با قطار مزایای دیگری هم دارد. قیمت
        </p>
        <div>
          <p>
            علاوه بر امنیت، سفر با قطار مزایای دیگری هم دارد. قیمت مناسب، فضای
            صمیمی و راحت کوپه، صرف غذا در بوفه و قدم زدن در راهرو باعث می‌شود تا
            سختیِ مسیرهای طولانی به حداقل رسیده و خاطره خوشی از سفر در ذهن مسافر
            باقی بماند.
            <br />
            بیش از 90 سال از احداث راه‌آهن و اولین سفر با قطار در ایران می‌گذرد،
            اما بسیاری از مسافران با خدمات قطارهای شبکه‌ ریلی کشور آشنا نیستند.
            به همین منظور قصد داریم شما را با امکانات و خدمات قطارهای ایران آشنا
            کنیم تا هنگام خرید آنلاین بلیط قطار، انتخاب‌های بهتری داشته باشید.
          </p>
        </div>
        <div className="read-more">{read}</div>
      </div>

      <div className="boxs-blit-train mb-64">
        {Box.map((item) => (
          <BoxBlitTrain bg={item.bg} title={item.title} matn={item.matn} />
        ))}
      </div>
      <div className="mb-64">
        <h2>قیمت بلیط قطار</h2>
        <p>
          سفر با قطار می‌تواند یک تصمیم اقتصادی به حساب بیاید، چرا که شما با
          انتخاب قطار می‌توانید هزینه‌های سفرتان را به طور چشمگیری کاهش دهید.
          قیمت تمام شده بلیط قطار کاملا بستگی به مسیر، شرکت ریلی و نوع قطار
          انتخابی شما دارد. بعضی از شرکت‌های ریلی امکان حمل خودرو را برای شما در
          نظر گرفته‌اند که در صورت انتخاب این گزینه، مبلغی به هزینه‌های سفر شما
          اضافه می‌شود. برای اطلاع از آخرین قیمت بلیط قطار در مسیر مورد نظر خود
          کافیست سری به سامانه علی‌بابا بزنید و با مشخص کردن مبدا، مقصد و تاریخ
          سفر، لیستی از پیشنهادات را دریافت کنید. برای شناسایی ارزان‌ترین بلیط
          قطار گزینه «مرتب‌سازی بر اساس قیمت» به کمک شما می‌آید. <br />
          جایگاهی که قطار در حمل و نقل عمومی به خود اختصاص داده، جایگاهی میانه
          است. در ایران سفر با هواپیما را اغلب هم معنا با سفرهای لوکس و سفر با
          اتوبوس را سفرهایی مقرون به صرفه می‌دانند‌، در نتیجه سفر با قطار
          انتخابی بین این دو است. در سال‌های اخیر و با ورود قطارهای پنج ستاره
          مانند فدک و زندگی به مسیرهای ریلی، جایگاه این وسیله نقلیه متوجه
          تغییراتی شده است. کسانی که تا پیش از این سفر با هواپیما انتخاب اول‌شان
          بود، در صورتی که دغدغه زمان نداشته باشند، این قطارها را برای سفر
          انتخاب می‌کنند. <br />
          از طرف دیگر قیمت مناسب بلیط قطار نسبت به هواپیما و قیمت نزدیک آن به
          اتوبوس سبب شده که در سال‌های اخیر مسافران بیشتری از این وسیله نقلیه
          برای سفر استفاده کنند. بعد از فراهم شدن امکان خرید و استرداد آنلاین
          بلیط قطار که وب‌سایت علی‌بابا برای اولین بار این خدمت را ارائه کرد،
          استقبال از قطار رشد چشمگیری داشته است.
        </p>
      </div>
      <div className="mb-64">
        <h2>رزرو بلیط قطار</h2>
        <p>
          رزرو بلیط قطار، سفر با قطار را راحت‌تر از همیشه کرده است. برای خرید
          اینترنتی بلیط قطار کافی است وارد وب‌سایت علی‌بابا شوید، سپس با وارد
          کردن نام شهر مبدا و مقصد و تاریخ رفت و برگشت می‌توانید تمام قطارهای
          شرکت‌های ریلی در مسیر مورد نظرتان را مشاهده کنید. بسته به ساعت حرکت،
          امکانات قطار و بودجه می‌توانید مناسب‌ترین بلیط را انتخاب کنید و با
          نهایی کردن رزرو بلیط قطار و پرداخت آن، بلیط خود را به صورت آنلاین
          دریافت کنید.
        </p>
      </div>
      <div className="boxs-blit-train mb-64">
        {Box2.map((item) => (
          <BoxBlitTrain bg={item.bg} title={item.title} matn={item.matn} />
        ))}
      </div>
      <div className="mb-64">
        <h2>شرکت‌های ریلی در ایران</h2>
        <p>
          به صورت کلی شرکت رجا و شرکت‌های زیرمجموعه سفیر و شرکت فدک،
          تامین‌کنندگان قطارهای خطوط ریلی ایران هستند و علی‌بابا بخش اعظمی از
          بلیط این شرکت‌ها را از طریق سامانه علی‌بابا به متقاضیان عرضه می‌کند.
          شرکت‌های زیرمجموعه سفیر عبارتند از: راه آهن شرقی بنیاد (بن ریل)،
          جوپار، ریل سیر کوثر، ریل ترابر سبا، مهتاب سیر جم (مهتاب)، قطارهای
          مسافری نور (نورالرضا)، رعد و <Link to="">پارس لاریم</Link>.
        </p>
      </div>
      <div className="boxs-train mb-64">
        {BoxTrainContent.map((item) => (
          <BoxTrain img={item.img} descreption={item.descreption} />
        ))}
      </div>
      <div className="mb-64">
        <h2> مسیرها و امکانات قطارهای ایران </h2>
        <p className="mb-64">
          قطارهای مسافری به دو دسته کلی تقسیم می‌شوند: قطارهای سالنی و کوپه‌ای.
          با توجه به ظرفیت هر قطار، قطارهای کوپه‌ای شامل کوپه‌های چهار و شش نفره
          می‌شوند که صندلی‌های کوپه به صورت تخت باز می‌شوند. برخی از قطارهای
          کوپه‌ای از نوع کوپه‌صندلی هستند که صندلی‌ها در این قطارها قابلیت تخت
          شدن ندارند. نوع واگن قطارهای کوپه شامل غزال بنیاد، سروش بنیاد (پارس)،
          پرستو، پلور سبز، سفیر، پارسی، سبز، سیمرغ، زندگی، نگین، غدیر و خلیج
          فارس هستند. بسته به ظرفیت قطارهای سالنی، در هر ردیف سه یا چهار صندلی
          وجود دارد. نوع واگن این قطارها شامل قطارهای صبا اتوبوسی و پردیس سالنی
          است. علاوه بر مسیرهای حومه‌ای، قطارهای اتوبوسی در مسیرهای تهران - مشهد
          – تهران، تهران – قم - تهران، تهران – میانه - تهران و تهران – یزد -
          تهران نیز تردد دارند.
        </p>
        <h2> قطارهای رجا </h2>
        <p className="mb-32">
          در ابتدای شروع فعالیت صنعت ریلی در کشور، حمل مسافر و بار تفکیک نشده
          بود و این خدمات را راه آهن ایران ارائه می‌داد. در سال 1376 بخش خدمات
          مسافری صنعت ریلی کشور به شرکت رجا واگذار شد. این شرکت در ابتدا
          زیرمجموعه بخش دولتی بود و در سال 1388 به بخش خصوصی واگذار شد. تنوع
          قطارهای شرکت رجا گزینه‌های مختلفی را بر اساس امکانات، خدمات و کیفیت در
          اختیار مسافران قرار می‌دهند. این قطارها به انواع قطارهای چهار تخته،
          قطارهای شش تخته، قطارهای سالنی و قطار مجلل زندگی تقسیم می‌شوند.
        </p>
        <h4 className="mb-8"> قطارهای چهار تخته رجا </h4>
        <p className="mb-14">
          قطارهای چهار تخته رجا انواع مختلفی دارند و به قطارهای ویژه شامل
          قطارهای زندگی، سیمرغ و سبز، کلاس یک شامل قطارهای غزال و پلور سبز، کلاس
          دو شامل قطارهای لوکس چهار تخته و البرز و کلاس سه شامل قطار خلیج فارس
          تقسیم می‌شوند.
        </p>
        <h4>قطارهای سالنی رجا</h4>
        <p className="mb-14">
          قطارهای سالنی رجا در مقایسه با سایر قطارهای آن قیمت مناسب‌تری دارد و
          برای کسانی که سفرهای مقرون به صرفه را ترجیح می‌دهند گزینه بسیار مناسبی
          است. دسته‌بندی این قطارها شامل کلاس ویژه (تندروی پردیس)، کلاس یک (صبا
          و ارم) و کلاس سه (اتوبوسی، دو طبقه مترویی و معمولی صندلی) می‌شود.
        </p>
        <h4 className="mt-32">قطارهای شش تخته رجا</h4>
        <p className="mb-14">
          قطارهای شش تخته رجا برای سفرهای دسته جمعی و گروهی هم از لحاظ فضا و هم
          قیمت بسیار مناسب هستند. این قطارها به سه کلاس تقسیم می‌شوند و کلاس یک
          شامل قطار میلاد، کلاس دو شامل قطار پارسی و زاگرس و کلاس سه شامل قطار
          شش تخته تبدیلی می‌شود.
        </p>
        <h4 className="mt-32">قطار مجلل زندگی رجا</h4>
        <p className="mb-14">
          قطار مجلل زندگی به روزترین و لوکس‌ترین قطاری است که شرکت ریلی رجا وارد
          ناوگان ریلی کشور کرده است و برای کسانی که ترس از پرواز دارند و سفرهای
          لوکس و راحت را ترجیح می‌دهند انتخابی ایده‌آل است، چرا که ظاهر قطار
          زندگی و امکانات کوپه‌های چهار نفره آن بسیار متفاوت است. به محض ورود با
          نوشیدنی خوشامدگویی از مهمانان پذیرایی می‌شود و دمپایی راحتی برای تردد
          در راهرو در اختیار آن‌ها قرار می‌گیرد. هر کوپه مجهز به دو مانیتور 18
          اینچ است که مسافران می‌توانند از آرشیو فیلم و موسیقی آن با استفاده از
          هدفون‌هایی که در اختیار آن‌ها قرار می‌گیرد استفاده کنند. وب‌سایت
          علی‌بابا امکان خرید و استرداد آنلاین تمام قطارهای شرکت ریلی رجا را
          فراهم کرده است و مسافران می‌توانند در کمتر از دو دقیقه بلیط قطار مورد
          نظر را جستجو و خرید خود را نهایی کنند.
        </p>
        <h2>قطارهای سفیر</h2>
        <p className="mb-14">
          شرکت سفیر از بزرگترین شرکت‌های ریلی در ایران است که شرکت‌های زیادی از
          جمله بن‌ریل، جوپار، ریل سیر کوثر، مهتاب سیر جم، رعد تبریز، پارس لاریم
          و نور از زیرمجموعه‌های آن هستند که در ادامه به معرفی آنها پرداخته‌ایم.
        </p>
        <h4 className="mt-32">شرکت بن ریل</h4>
        <p className="mb-14">
          شرکت راه آهن بنیاد شرقی که امروزه آن را با نام بن‌ریل می‌شناسیم در سال
          1373 با خرید 10 واگن مسافری و 100 واگن باری فعالیت خود را در بخش
          مسافری و باری ریلی کشور آغاز کرد. بن‌ریل اولین شرکت ریلی خصوصی است که
          وارد بخش خدمات ریلی و باری ایران شد. اکنون که ربع قرن از فعالیت این
          شرکت می‌گذرد رشد چشمگیری در کیفیت ارائه خدمات و ناوگان آن دیده می‌شود
          و بن‌ریل توانسته است تعداد واگن‌های خود را در طول مدت فعالیت از 10 به
          131 دستگاه برساند. 7.5 درصد از سرانه سالانه جابه‌جایی مسافران ریلی به
          بن‌ریل می‌رسد و ناوگان این شرکت ظرفیت حمل دو میلیون مسافر را در
          مسیرهای ریلی سراسر کشور دارند. ناوگان شرکت ریلی بن‌ریل شامل قطارهای
          پارسی، سفیر، غزال، سروش و پلور می‌شود. علاوه بر خرید آنلاین بلیط
          قطارهای بن‌ریل در وب‌سایت علی‌بابا، این وب‌سایت امکان استرداد آنلاین
          را هم فراهم کرده است و بعد از کنسل کردن بلیط هزینه آن در کمترین زمان
          ممکن به حساب مسافران برمی‌گردد.
        </p>
        <h4 className="mt-32">شرکت ریلی ریل سیر کوثر</h4>
        <p className="mb-14">
          در سال 1384 شرکت قطارهای مسافری کوثر فعالیت خود را با خرید دو رام قطار
          مسافری غزال در صنعت ریلی ایران آغاز کرد. با اضافه شدن واگن‌های چهار
          تخته لوکس غزال به واگن‌های دیگر، این شرکت شروع به جابه‌جایی مسافران در
          مسیرهای مشهد-بندرعباس-مشهد و یزد-مشهد-یزد کرد. خرید 134 دستگاه واگن
          مخزن‌دار مخصوص حمل و نقل مواد نفتی و روغنی آغاز فعالیت ریل سیر کوثر در
          زمینه حمل بار بود. ریل سیر کوثر در حال حاضر روزانه به 2000 مسافر خدمات
          سفر ارائه می‌کند. فضای کوپه‌های قطار چهار تخته لوکس غزال بسیار راحت
          است و در بدو ورود بسته پذیرایی و چای در اختیار مهمانان قرار می‌گیرد.
          چنانچه لازم باشد در مسیر سفر وعده‌های غذایی اصلی را میل کنید،
          می‌توانید از رستوران قطار سفارش دهید. در کوپه‌ها مانیتور تعبیه شده است
          و اگر علاقه‌مند بودید از آرشیو موسیقی و فیلم در طول راه استفاده کنید،
          هدفون در اختیار شما قرار می‌گیرد. کتاب، روزنامه و ویلچیر بنا به
          درخواست شما برای‌تان فراهم می‌شود.
        </p>
        <h4 className="mt-32">شرکت ریلی مهتاب سیر جم</h4>
        <p className="mb-14">
          شرکت ریلی مهتاب سیر جم از سال 1389 مسافران را در مسیرهای ریلی کشور
          جابه‌جا می‌کند. ناوگان این شرکت ریلی شامل 87 دستگاه واگن پارسی، 23
          دستگاه واگن اتوبوسی آلمانی و واگن‌های شش تخته لوکس هستند. قطارهای این
          شرکت ریلی در مسیر اهواز-مشهد-اهواز، تهران-خرمشهر-تهران،
          تهران-اندیمشک-تهران، تهران-اهواز-تهران و تهران-شیراز-اهواز تردد دارند.
          قطار لوکس شش تخته در طول مسیر با بسته پذیرایی، چای و آب معدنی از
          مسافران پذیرایی می‌کند و سرویس خواب در اختیار مسافران قرار می‌دهد.
          هنگام خرید بلیط هم می‌توانید وعده غذایی خود را با پرداخت هزینه اضافی
          از منوی پیشنهادی انتخاب کنید.
        </p>
        <h4 className="mt-32">شرکت ریلی ترابر سبا</h4>
        <p className="mb-14">
          تاریخچه فعالیت شرکت ریلی ترابر سبا در مسیرهای ریلی ایران به شهریورماه
          سال 1388 برمی‌گردد. فعالیت این شرکت با خرید 50 واگن مسافری شروع شد و
          در سال 92، 28 دستگاه واگن کره‌ای اتوبوسی هم به ناوگان آن اضافه شد. در
          سال 1393، 37 دستگاه واگن پارسی خریداری شد که در حال حاضر از 25 دستگاه
          بهره‌برداری شده است. واگن‌های چهار تخته و شش تخته پارسی امکانات مشابهی
          را در اختیار مسافران قرار می‌دهند. در هر دو نوع از واگن‌ها رستوران
          برای صرف وعده‌های غذایی گرم و متنوع وجود دارد. مانیتور در کوپه‌ها
          تعبیه شده و امکان استفاده از آرشیو فیلم و موسیقی وجود دارد. چای، آب
          معدنی، بسته پذیرایی و سرویس خواب به صورت رایگان در اختیار مهمانان قرار
          می‌گیرند. درب‌های اتومات لمسی، سیستم احضار مهمان‌دار، سیستم تهویه و
          عطرافشان از دیگر امکانات این واگن‌ها هستند.
        </p>
        <h4 className="mt-32">شرکت رعد تبریز</h4>
        <p className="mb-14">
          شركت قطارهاى مسافربری رعد تبریز در سال ۱۳۸۲ در بخش حمل و نقل ریلی
          مسافری آغاز به کار کرد. قطارهای این شرکت جز اولين قطارهای خصوصي در
          مسير تهران-تبريز بودند که توافق‌نامه راه‌اندازی آن ميان شركت قطارهاي
          مسافري رجا و رعد تبريز به امضا رسید. همچنین قطارهای سهند رعد از اوایل
          دهه ۸۰ شروع به جابه‌جایی مسافران کردند و به تدریج گستره فعالیت خود را
          از مسیر تهران-تبریز به سایر مسیرها توسعه دادند. قطارهای سهند در دسته
          چهارتخته‌های لوکس قرار می‌گیرند. واگن‌های چهار تخته سهند مسافران را در
          مسیرهای ریلی تهران-تبریز-تهران، تهران-مشهد-تهران، تهران-یزد-تهران،
          تهران-اصفهان-تهران و تبریز-مشهد-تهران جا به جا می‌کنند. از میان تمام
          این مسیرها فقط در مسیر تبریز-مشهد-تبریز امکان ثبت سفارش غذا هنگام تهیه
          بلیط وجود دارد. رستوران و فروشگاه تنقلات در تمام مسیرها وجود دارد. آب
          معدنی، روزنامه و سرویس خواب در اختیار مهمانان قرار می‌گیرد.
        </p>
        <h4 className="mt-32">شرکت مسافری نور</h4>
        <p className="mb-14">
          شرکت نورالرضا (قطارهای مسافری نور) اولین شرکت در بخش خصوصی است که
          تجیزات قطارهای خود را بدون واسطه از قطعه‌سازان آلمانی، ایتالیایی و
          ژاپنی تامین کرده است. نور در حال حاضر با 54 دستگاه واگن لوکس چهارتخته
          و امکانات و خدماتی شایسته، یکی از باکیفیت‌ترین ارائه‌کننده‌های خدمات
          ریلی در کشور است. قطارهای لوکس چهار تخته شرکت ریلی نورالرضا در مسیرهای
          تهران-مشهد-تهران، تهران-شیراز-تهران، کرج-مشهد-کرج و اصفهان-مشهد-اصفهان
          تردد دارند. در سفر با قطارهای نورالرضا مسافران می‌توانند هنگام خرید
          بلیط وعده غذایی خود را هم از منوی پیشنهادی رزرو کنند و در صورتی که غذا
          را رزرو نکرده باشند امکان خرید غذا در واگن هم وجود دارد . در بدو ورود
          از مهمانان پذیرایی می‌شود و در طول مسیر می‌توانید از فروشگاه واگن
          تنقلات و خوراکی خریداری کنید. کوپه ها مجهز به مانیتور هستند و هدفون در
          اختیار مسافران قرار می‌گیرد. آب معدنی، ویلچیر و روزنامه در صورت
          درخواست به مهمانان ارائه می‌شود.
        </p>
        <h2>قطارهای فدک</h2>
        <p className="mb-14">
          قطار فدک، اولین قطار پنج ستاره ایرانی است که با ورود به سیستم ریلی
          کشور در سال 1394 توانست استانداردهای صنعت ریلی را به طرز قابل ملاحظه
          ای بهبود بخشد و نگرش مسافران را در خصوص سفر با قطار تغییر داده است
          قطارهای فدک با ارائه سفری لوکس و ایمن برای مهمانان خود، توانسته است
          سفر با قطار را برای آنان خاطره انگیز سازد. از جمله ویژگی های اصلی
          قطارهای فدک عبارتند از :
        </p>
        <ul>
          <li>ارائه ی سفری ایمن با رعایت و کنترل تمامی پروتکل های لازم</li>
          <li>
            ارائه صدها فیلم، انیمیشن، موزیک و ادعیه با انتخاب مهمان به صورت شخصی
            در طول سفر توسط دو IPTV اختصاصی در هر کوپه برای مسافران
          </li>
          <li>
            ارائه اینترنت رایگان به تمامی مهمانان در تمام کلاس ها جهت استفاده در
            طول سفر
          </li>
          <li>ارائه هدایا در مناسبت های مختلف به مهمانان</li>
          <li>
            تهیه کلیه خدمات پذیرایی ارائه شده در طول سفر توسط کترینگ اختصاصی و
            مهمانداران آموزش دیده قطارهای فدک
          </li>
          <li>
            ارائه سرویس خواب وکیوم شده و پک بهداشتی در کوپه های ضدعفونی شده
          </li>
          <li>استقبال از مسافران در ورودی اختصاصی ایستگاه</li>
          <li>
            سرویس بهداشتی ایرانی و فرنگی وکیوم با شیرهای اتوماتیک در ابتدا و
            انتهای هر سالن
          </li>
          <li>
            عایق های صوتی و حرارتی استاندارد برای حذف صداهای اضافه و سیستم نور
            پردازی مدرن و تخت های لاتکس ارگونومیک
          </li>
          <li>توان حرکت با سرعت 200 کیلومتر بر ساعت</li>
        </ul>
        <h2 className="mt-32">قطارهای جوپار</h2>
        <p className="mb-14">
          شرکت قطارهای مسافری و باری جوپار فعالیت خود را در سال 1381 در بخش
          خصوصی آغاز کرد. در ابتدا ناوگان این شرکت محدود به 22 دستگاه واگن شش
          تخته پارسی بود که در سال 88، 84 دستگاه واگن درجه یک پارسی و در سال93،
          45 دستگاه واگن مسافری به ناوگان آن اضافه شد. در حال حاضر جوپار یکی از
          بزرگترین شرکت‌های ریلی است که در مسیرهای تهران-مشهد-تهران،
          تهران-بندرعباس-تهران، تهران-کرمان-تهران، تهران-زاهدان-تهران و
          کرمان-مشهد-کرمان فعالیت دارد.
          <br />
          قطار شش تخته پارسی که در مسیرهای ریلی پرتردد مسافران را جابه جا
          می‌کند، امکانات لازم برای سفری راحت را در اختیار مسافران قرار می‌دهد.
          رستوران مجهز قطار امکان سفارش و میل کردن غذا را در طول راه فراهم
          می‌کند و همچنین از غرفه فروش تنقلات مسافران می‌توانند خوراکی‌های‌شان
          را تهیه کنند. کوپه شش تخته مجهز به مانیتور برای تماشای فیلم و گوش دادن
          به موسیقی در طول مسیر است. سرویس خواب، روزنامه و آب معدنی هم به صورت
          رایگان در اختیار مسافران قرار می‌گیرد.
        </p>
      </div>

     
    </div>
  );
};

export default ContentTrainMobile;