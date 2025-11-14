import { sectionFutureData, logot } from "../mockData/sectionFutureData";

export const Title = ({ title }) => (
  <h2 className="section-future-title">{title}</h2>
);

const Illustration = ({ illustration: { alt, src } }) => (
  <img src={src} alt={alt} />
);

const CompanyInfo = ({ companyInfo, logot }) => (
  <div className="footer-column">
    <Illustration illustration={logot} />
    <p className="light-text" dangerouslySetInnerHTML={{ __html: companyInfo.address }} />
    <p className="light-text">{companyInfo.copyright}</p>
  </div>
);

const LinksColumn = ({ links }) => (
  <div className="footer-column-link">
    <h3>{links.title}</h3>
    {links.items.map((item, index) => (
      <a key={index}>{item}</a>
    ))}
  </div>
);

const CompanyColumn = ({ company }) => (
  <div className="footer-column-link">
    <h3>{company.title}</h3>
    {company.items.map((item, index) => (
      <a key={index}>{item}</a>
    ))}
  </div>
);

const ContactsColumn = ({ contacts }) => (
  <div className="footer-column-link">
    <h3>{contacts.title}</h3>
    {contacts.items.map((item, index) => (
      <a key={index} dangerouslySetInnerHTML={{ __html: item }} />
    ))}
  </div>
);


const SectionFuture = () => {
  const { title, buttonText, companyInfo, links, company, contacts } = sectionFutureData;
  return (
    <section className="SectionFuture section">
      <div className="section-future-content">
        <Title title={title} />
        <a href="#!" className="section-future-button">
          {buttonText}
        </a>
        <div className="information-future">
          <CompanyInfo companyInfo={companyInfo} logot={logot} />
          
          <div className="straight-columns">
            <LinksColumn links={links} />
            <CompanyColumn company={company} />
            <ContactsColumn contacts={contacts} />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SectionFuture;