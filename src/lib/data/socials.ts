import RiGithubFill from "~icons/ri/github-fill";
import RiLinkedInFill from "~icons/ri/linkedin-box-fill";

type Social = {
    [key: string]: {
        url: string;
        icon: any;
    }
}

const socials: Social = {
    GitHub: {
        url: "",
        icon: RiGithubFill
    },
    LinkedIn: {
        url: "",
        icon: RiLinkedInFill
    },
}

export default socials;
