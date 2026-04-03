const ContactSection = ({ profile, socialLinks }) => {
  return (
    <section id='contact' className='section'>
      <div className='section-heading'>
        <p className='eyebrow'>Contact</p>
        <h2 className='section-title'>Direct contact and profile links.</h2>
        <p>Use the links below to reach out or review the public profile pages.</p>
      </div>

      <div className='contact-layout'>
        <article className='contact-card'>
          <h3>{profile.contactTitle}</h3>
          <p>{profile.contactBody}</p>
        </article>

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
