import * as React from "react";
import { Link } from "react-router-dom";

interface IPublicTemplateProps {}

const PublicTemplate: React.FunctionComponent<IPublicTemplateProps> = (
  props
) => {
  return (
    <div>
      <div className="h-4rem flex flex-row bg-bluegray-900">
        <div className="w-10 m-auto flex flex-row justify-content-between">
          <div className="w-5 flex flex-row justify-content-between">
            <div>logo</div>
            <div className="flex flex-row justify-content-between gap-4">
              <div>about</div>
              <div>use cases</div>
              <div>plans</div>
            </div>
          </div>
          <div>
            <Link to="login">Login</Link>
          </div>
        </div>
      </div>
      <div className="h-16rem flex flex-row bg-bluegray-800">
        <div className="w-10 m-auto flex flex-row justify-content-between">
          banner
        </div>
      </div>
      <div className="h-30rem flex flex-row bg-bluegray-700">
        <div className="w-10 m-auto flex">content</div>
      </div>
      <div className="h-9rem flex flex-row bg-bluegray-800">
        <div className="w-10 m-auto flex flex-row justify-content-between">
          footer
        </div>
      </div>
    </div>
  );
};

export default PublicTemplate;
