const ContactSection = ({ profile, socialLinks }) => {
  return (
    <section id='contact' className='section-shell content-section'>
      <div className='contact-shell'>
        <div className='contact-copy'>
          <h2 className='section-title'>{profile.contactTitle}</h2>
          <p>{profile.contactBody}</p>
          <a className='button button-primary' href={socialLinks[0]?.href}>
            Start a conversation
          </a>
        </div>

        <div className='contact-list'>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className='contact-link'
              href={link.href}
              target='_blank'
              rel='noreferrer'
            >
              <div>
                <strong>{link.label}</strong>
                <span>{link.value}</span>
              </div>
              <span>Open</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
