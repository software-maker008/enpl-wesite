"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function FloatingTicket() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <a
      href="http://40.0.0.12/customerlogin"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-ticket-wrapper"
    >
      <span className="ticket-tooltip">
        Create Support Ticket
      </span>

      <div className="floating-ticket-icon">
        <Image
          src="/ticket.png"
          alt="Create Support Ticket"
          width={38}
          height={38}
          priority
        />
      </div>
    </a>,
    document.body
  );
}
