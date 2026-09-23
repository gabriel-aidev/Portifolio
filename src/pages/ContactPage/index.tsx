import { useEffect, useRef, useState } from 'react';
import copy from 'copy-to-clipboard';
import { TbClipboardText } from 'react-icons/tb';
import { FiMail, FiCheck } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

import Header from '../../components/Header';
import { useReveal } from '../../hooks/useReveal';
import { Container, SectionTitle } from '../../styles/global';
import { StyledContactPage } from './style';

type ContactKey = 'email' | 'whatsapp' | 'linkedin' | 'github';

interface ContactItem {
  key: ContactKey;
  href: string;
  icon: JSX.Element;
  label: string;
  value: string;
  copyValue: string;
  copyAriaLabel: string;
}

const contacts: ContactItem[] = [
  {
    key: 'email',
    href: 'mailto:gabrielc.maciel42@gmail.com',
    icon: <FiMail />,
    label: 'E-mail',
    value: 'gabrielc.maciel42@gmail.com',
    copyValue: 'gabrielc.maciel42@gmail.com',
    copyAriaLabel: 'Copiar e-mail',
  },
  {
    key: 'whatsapp',
    href: 'https://wa.me/5522981167375',
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    value: '+55 (22) 98116-7375',
    copyValue: '5522981167375',
    copyAriaLabel: 'Copiar telefone',
  },
  {
    key: 'linkedin',
    href: 'https://www.linkedin.com/in/gabriel-maciel-5600a6246/',
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'Gabriel Maciel',
    copyValue: 'https://www.linkedin.com/in/gabriel-maciel-5600a6246/',
    copyAriaLabel: 'Copiar LinkedIn',
  },
  {
    key: 'github',
    href: 'https://github.com/gabriel-aidev',
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'gabriel-aidev',
    copyValue: 'https://github.com/gabriel-aidev',
    copyAriaLabel: 'Copiar GitHub',
  },
];

const ContactPage = () => {
  const [copiedKey, setCopiedKey] = useState<ContactKey | null>(null);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cardRef = useReveal<HTMLElement>();

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const handleCopy = (key: ContactKey, text: string) => {
    copy(text);

    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
    }

    setCopiedKey(key);
    copyTimeoutRef.current = setTimeout(() => {
      setCopiedKey(null);
      copyTimeoutRef.current = null;
    }, 2000);
  };

  return (
    <StyledContactPage>
      <Header />
      <Container>
        <div className='contacts-intro'>
          <SectionTitle as='h1'>Contato</SectionTitle>
          <p>Prefiro e-mail ou WhatsApp, respondo assim que vejo a mensagem.</p>
        </div>
        <article className='contacts-card' ref={cardRef}>
          {contacts.map((contact) => {
            const isCopied = copiedKey === contact.key;

            return (
              <div className='contact-row' key={contact.key}>
                <a
                  className='contact-link'
                  href={contact.href}
                  {...(contact.key !== 'email' ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <span className='icon-pill'>{contact.icon}</span>
                  <span className='contact-text'>
                    <span className='contact-label'>{contact.label}</span>
                    <span className='contact-value'>{contact.value}</span>
                  </span>
                </a>
                <span className='copy-wrap'>
                  <span
                    className={`copy-feedback${isCopied ? ' is-visible' : ''}`}
                    aria-live='polite'
                  >
                    {isCopied ? 'Copiado!' : ''}
                  </span>
                  <button
                    type='button'
                    className={`copy-button${isCopied ? ' is-copied' : ''}`}
                    aria-label={contact.copyAriaLabel}
                    onClick={() => handleCopy(contact.key, contact.copyValue)}
                  >
                    {isCopied ? <FiCheck /> : <TbClipboardText />}
                  </button>
                </span>
              </div>
            );
          })}
        </article>
      </Container>
    </StyledContactPage>
  );
};

export default ContactPage;
