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
    <a>ул. Профессора<br />Поздеева, 13, к.Г, Пермь</a>
    <a href={`tel:${contacts.items[1].replace(/\s|\(|\)|-/g, '')}`}>{contacts.items[1]}</a>
    <a href={`mailto:${contacts.items[2]}`}>{contacts.items[2]}</a>
  </div>
);


const SectionFuture = () => {
  const { title, buttonText, companyInfo, columns } = sectionFutureData;
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
            {columns.map((column, index) => {
              switch(column.type) {
                case 'links':
                  return <LinksColumn key={index} links={column} />;
                case 'company':
                  return <CompanyColumn key={index} company={column} />;
                case 'contacts':
                  return <ContactsColumn key={index} contacts={column} />;
                default:
                  return null;
              }
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SectionFuture;