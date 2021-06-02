import { ReactComponent as EmailSvg } from "../../assets/svg/email.svg";
import { ReactComponent as GithubSvg } from "../../assets/svg/github.svg";
import { ReactComponent as LinkedInSvg } from "../../assets/svg/linkedIn.svg";

// TODO: Clean up, add links

export default function LinkIcons() {
  return (
    <div style={{ position: "fixed", right: "40px", bottom: "40px" }}>
      <EmailSvg
        style={{
          width: "30",
          height: "30",
          margin: "0 10px 0 10px",
          cursor: "pointer",
        }}
      />
      <GithubSvg
        style={{
          width: "30",
          height: "30",
          margin: "0 10px 0 10px",
          cursor: "pointer",
        }}
      />
      <LinkedInSvg
        style={{
          width: "30",
          height: "30",
          margin: "0 10px 0 10px",
          cursor: "pointer",
        }}
      />
    </div>
  );
}
