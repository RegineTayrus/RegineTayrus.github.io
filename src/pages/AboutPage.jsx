import portrait from "../../images/regine.png";

const information = [
  { icon: "fas fa-user", label: "Name", value: "Regine Quimbo Tayrus" },
  {
    icon: "fas fa-calendar-alt",
    label: "Birthdate",
    value: "November 20, 2005",
  },
  { icon: "fas fa-venus-mars", label: "Sex", value: "Female" },
  { icon: "fas fa-cross", label: "Religion", value: "Roman Catholic" },
  {
    icon: "fas fa-graduation-cap",
    label: "Education",
    value: "BS Computer Science",
  },
  {
    icon: "fas fa-map-marker-alt",
    label: "Location",
    value: "Kalilangan Tubod, Lanao del Norte",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section id="about">
        <div className="about-text">
          <span>About Me</span>
          <h2>Who I Am</h2>
          <p>
            Hi! I&apos;m <b>Regine Tayrus</b>, a passionate Web Designer who
            loves creating beautiful, user-friendly and responsive websites. I
            enjoy turning ideas into designs that not only look great but also
            provide meaningful experiences for users.
          </p>
          <p>
            I&apos;m always eager to learn new things, explore creative ideas
            and grow as a designer.
          </p>

          <div className="info">
            {information.map(({ icon, label, value }) => (
              <div key={label}>
                <i className={icon} aria-hidden="true" />
                <div>
                  <h4>{label}</h4>
                  <p>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-image">
          <img src={portrait} alt="Regine Tayrus" />
        </div>
      </section>
    </main>
  );
}
