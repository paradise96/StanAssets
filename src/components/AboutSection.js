import img from "../assets/imgs/about.jpg";
import BlockTitle from "../components/common/BlockTitle";
function AboutComp() {
  return (
    <section id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 col-lg-4">
            <img
              src={img}
              alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
              className="w-100 img-thumbnail mb-3"
            />
          </div>
          <div className="col-md-7 col-lg-8">
            <BlockTitle
              title="We Create"
              subtitle="Awesome Work"
              submb="0"
              titlemb="3"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              cupiditate quas, amet harum perferendis minus, cum dolorum
              obcaecati iste aspernatur voluptatum aut.
            </p>
            <p>
              Cum laudantium unde nemo doloribus eligendi quodarum ea vitae
              dicta. Accusantium vero, ea? Alias, atque libero. Id, ut harum.
            </p>
            <p>
              consectetur adipisicing elit. Omnis quidem, quos iure a dolorum
              illum culpa quia nemo soluta, ratione harum beatae minus doloribus
              consectetur! Similique tempora sunt doloribus molestias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutComp;