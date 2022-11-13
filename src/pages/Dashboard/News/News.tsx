import AddButton from "../../../components/AddButton/AddButton";
import DashNews from "../../../components/DashNews/DashNews";
import "./News.css";

const News = () => {
  return (
    <section className="news-section">
      <h1 className="news-section-header">Aktualności</h1>

      <AddButton />

      <h3>Ostatnio dodane</h3>
      <ul className="news-section-list">
        <DashNews
          header="Wywiad z Mike Tyson"
          date="12.12.2022"
          author="Norbert Sadawa"
          thumbnail="https://ocdn.eu/sport-images-transforms/1/9l7k9lBaHR0cHM6Ly9vY2RuLmV1L3B1bHNjbXMvTURBXy8xNzhjY2UzNTY4MGRhOTMyMjk5MDBiNmJhOGY4NDU3Zi5qcGeTlQMAzHnNDhDNB-mVAs0DsADCw5MJpjYzNWQ3OQbeAAKhMAGhMQE/evander-holyfield-mike-tyson.jpg"
          shortcut="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        temporibus, provident et, omnis ut maiores neque optio accusamus
        facere quidem quaerat quae..."
        />

        <DashNews
          header="Wywiad z Muhammad Ali"
          date="10.12.2022"
          author="Marzena Toruń"
          thumbnail="https://s2.tvp.pl/images2/2/7/7/uid_277cdbf84f731067cbfdecae42e7fa551622701016402_width_1200_play_0_pos_0_gs_0_height_678_muhammad-ali-fot-getty-images.jpg"
          shortcut="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        temporibus, provident et, omnis ut maiores neque optio accusamus
        facere quidem quaerat quae..."
        />
      </ul>
    </section>
  );
};

export default News;
