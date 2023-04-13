import { Icon } from "@iconify/react";
import Link from "next/link";
export default function TreatmentTitle({ post, className }) {
  return (
    <>
      <li className={`group mb-1 ${className}`}>
        <Link
          href={`/treatments/${post.slug}`}
          title={post.frontmatter.description}
          className="flex focus:bg-scgrey ease-in-out duration-500"
        >
          <Icon
            icon="ic:outline-chevron-right"
            className="w-8 h-8 text-scgrey-200 bg-scred 
                     group-hover:text-scgrey-100 group-hover:bg-scred-100 
                     group-focus:bg-scred-200 p-0.5 ease-in-out duration-500"
          />
          <span className="ml-3 hover:text-scgrey-100 group-focus:text-scgrey-100 my-auto ease-in-out duration-500">
            {post.frontmatter.title}
          </span>
        </Link>
      </li>
    </>
  );
}
