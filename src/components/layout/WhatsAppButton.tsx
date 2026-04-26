import { MessageCircleMore } from "lucide-react";

import { siteContent } from "@/lib/site-content";

export function WhatsAppButton() {
  return (
    <a
      href={siteContent.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar atendimento pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.02] animate-soft-pulse"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/16">
        <MessageCircleMore className="h-5 w-5" />
      </span>
      <span>Agendar</span>
    </a>
  );
}
