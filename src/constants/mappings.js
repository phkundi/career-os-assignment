import { BookmarkIcon } from "../components/icons/BookmarkIcon";
import { ChatTextLeftIcon } from "../components/icons/ChatTextLeftIcon";
import { CupHotIcon } from "../components/icons/CupHotIcon";
import { DownloadIcon } from "../components/icons/DownloadIcon";
import { PaperplaneIcon } from "../components/icons/PaperplaneIcon";
import { ArrowUpRightIcon } from "../components/icons/ArrowUpRightIcon";
import { BoxArrowUpIcon } from "../components/icons/BoxArrowUpIcon";
import { IconCircleButton } from "../components/buttons/IconCircleButton";
import { TextIconEndButton } from "../components/buttons/TextIconEndButton";
import { EmojiSunglassesIcon } from "../components/icons/EmojiSunglassesIcon";
import { formatTimestamp } from "../helpers";

const iconPink = {
  color: "#FC47BE",
  background: "#FFD6F6",
};

const iconBlue = {
  color: "#808CD7",
  background: "#DBE1FF",
};

const iconGreen = {
  color: "#2BBEB8",
  background: "#DDF7EC",
};

export const questTypeMapping = {
  install_extension: {
    content: (quest) => {
      return {
        title: "Install the CareerOS Chrome Extension",
        text: "Unlock the superpowers of CareerOS with our Chrome Extension. This plugin lets you save companies, contacts, and jobs from Linkedin and other job boards. It also lets you access our messaging template and send Linkedin messages directly from CareerOS.",
        icon: {
          src: DownloadIcon,
          ...iconPink,
        },
      };
    },
    action: {
      component: TextIconEndButton,
      text: "Install",
      icon: BoxArrowUpIcon,
      href: "#",
    },
    hoverActions: null,
  },
  submit_application: {
    content: (quest) => {
      return {
        title: `Submit your application to ${quest.job.title} at ${quest.company.name}`,
        text: `Deadline: ${formatTimestamp(quest.due_date)}`,
        icon: {
          src: PaperplaneIcon,
          ...iconPink,
        },
      };
    },
    action: {
      component: IconCircleButton,
      icon: ArrowUpRightIcon,
      href: "#",
    },
    hoverActions: {
      markDone: true,
      dismiss: true,
    },
  },
  "resolve-comment": {
    content: (quest) => {
      return {
        title: `Resolve a comment from your Career Advisor`,
        text: "You have an unresolved comment from your Career Advisor.",
        icon: {
          src: ChatTextLeftIcon,
          ...iconBlue,
        },
      };
    },
    action: {
      component: IconCircleButton,
      icon: ArrowUpRightIcon,
      href: "#",
    },
    hoverActions: null,
  },
  save_first_company: {
    content: () => {
      return {
        title: "Save your first company",
        text: "Browse our company database for your favorite companies or new inspiration and save your first company to get started.",
        icon: {
          src: BookmarkIcon,
          ...iconBlue,
        },
      };
    },
    action: {
      component: IconCircleButton,
      icon: ArrowUpRightIcon,
      href: "#",
    },
    hoverActions: null,
  },
  add_contact: {
    content: (quest) => {
      return {
        title: `Save a contact at ${quest.company.name}`,
        text: `You recently saved ${quest.company.name}. The next step is to now save a contact who’s working there to start networking with.`,
        img: {
          src: quest.company.logo_url,
          alt: quest.company.name,
        },
      };
    },
    action: {
      component: IconCircleButton,
      icon: ArrowUpRightIcon,
      href: "#",
    },
    hoverActions: {
      markDone: false,
      dismiss: true,
    },
  },
  send_linkedin_message: {
    content: (quest) => {
      return {
        title: `Send a Linkedin message to ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company.name}`,
        text: "Send a customized LinkedIn message to reach out to your new contact.\nDon't worry! We'll help you with the wording.",
        img: {
          src: quest.contact.profile_image,
          alt: `${quest.contact.first_name} ${quest.contact.last_name}`,
        },
      };
    },
    action: {
      component: IconCircleButton,
      icon: ArrowUpRightIcon,
      href: "#",
    },
    hoverActions: null,
  },
  send_linkedin_connection: {
    content: (quest) => {
      return {
        title: `Send a Linkedin invitation to ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company.name}`,
        text: "Send an invitation with a tailored message to your new contact. Our AI will help you!",
        img: {
          src: quest.contact.profile_image,
          alt: `${quest.contact.first_name} ${quest.contact.last_name}`,
        },
      };
    },
    action: {
      component: IconCircleButton,
      icon: ArrowUpRightIcon,
      href: "#",
    },
    hoverActions: null,
  },
  send_first_email: {
    content: (quest) => {
      return {
        title: `Send first email to ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company.name}`,
        text: `Send a first email to ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company.name} to get a conversation started.`,
        img: {
          src: quest.contact.profile_image,
          alt: `${quest.contact.first_name} ${quest.contact.last_name}`,
        },
      };
    },
    action: {
      component: IconCircleButton,
      icon: ArrowUpRightIcon,
      href: "#",
    },
    hoverActions: {
      markDone: false,
      dismiss: true,
    },
  },
  add_new_contact: {
    content: (quest) => {
      return {
        title: `Save a new contact at ${quest.company.name}`,
        text: "Add another contact to this company to start networking",
        img: {
          src: quest.company.logo_url,
          alt: quest.company.name,
        },
      };
    },
    action: {
      component: IconCircleButton,
      icon: ArrowUpRightIcon,
      href: "#",
    },
    hoverActions: null,
  },
  schedule_coffee_chat: {
    content: (quest) => {
      return {
        title: `Schedule a coffee chat with ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company.name}`,
        text: "Get unique insights from your new contact by scheduling an informational interview with them.\nMake sure to use our coffee chat tips to prepare for your meeting.",
        icon: {
          src: CupHotIcon,
          ...iconGreen,
        },
      };
    },
    action: {
      component: IconCircleButton,
      icon: ArrowUpRightIcon,
      href: "#",
    },
    hoverActions: {
      markDone: true,
      dismiss: false,
    },
  },
  send_follow_up_email: {
    content: (quest) => {
      return {
        title: `Send a follow-up email to ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company.name}`,
        text: `Send a follow up email to ${quest.contact.first_name} ${quest.contact.last_name} at ${quest.company.name} to get a conversation started.`,
        img: {
          src: quest.contact.profile_image,
          alt: `${quest.contact.first_name} ${quest.contact.last_name}`,
        },
      };
    },
    action: {
      component: IconCircleButton,
      icon: ArrowUpRightIcon,
      href: "#",
    },
    hoverActions: null,
  },
  all_quests_complete: {
    content: () => {
      return {
        title: "All quests complete!",
        text: "You did it! Now, relax and wait for more...",
        icon: {
          src: EmojiSunglassesIcon,
          ...iconPink,
        },
      };
    },
  },
};
