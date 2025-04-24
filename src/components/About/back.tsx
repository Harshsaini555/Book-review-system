import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  interface BacktoHomeProps {
    text: string;
}
  
  export default function BacktoHome({ text }: BacktoHomeProps) {
    return (
      <Breadcrumb className="text-zinc-400 ml-10">
        <BreadcrumbList className="text-[1rem]">
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="hover:text-zinc-500 hover:underline">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
            <p>. . .</p>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="cursor-pointer text-zinc-700 hover:underline">{text} </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  }
  