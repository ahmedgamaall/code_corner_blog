import BorderedInputField from "@/app/components/BorderedInputField";
import { useState } from "react";
import FilledButton from "@/app/components/FilledButton";
import Image from "next/image";

export default function ArticleBodySection() {

  return (
    <div className="w-full flex flex-col justify-center items-start py-2 space-y-4 px-40 mb-10">
      <h2 className="font-bold  text-4xl" style={{ color: "#172B4D" }}>
        Lorem ipsum dolor
      </h2>
      <p className="text-xl text-gray-600">
        By Ahmed Gamal on Dec 24, 2024 - 5 min read
      </p>
      <Image
        className="rounded-md h-96 w-full container my-4 bg-slate-900"
        src="/article_image.jpg"
        width={400}
        height={200}
        alt="article image"
      />
      <p className="text-xl text-gray-600">
        Lorem ipsum dolor Lorem ipsum dolor sit amet. Ut laudantium adipisci et
        animi dolorum et neque error aut maxime nesciunt. Vel recusandae ducimus
        At dolorem iste id magni quam id corrupti officiis At minus minus et
        quidem rerum! 33 nihil quas aut consequatur asperiores est sunt illo et
        sunt commodi. Non magni quisquam ex possimus ducimus id fuga dicta et
        obcaecati blanditiis sed quidem sint est molestiae ea quam corrupti. Nam
        itaque quae et ratione error vel possimus sunt! Qui cupiditate quae ut
        magnam veritatis vel nemo dolores id aspernatur deleniti sed itaque aut
        odio placeat. Lorem ipsum dolor sit amet Eum aperiam facilis aut
        deleniti ipsa At aspernatur nisi quo corporis assumenda non dolores
        rerum ad velit porro rem nulla reprehenderit. Non repudiandae harum ut
        harum laudantium et veritatis eaque et nesciunt voluptas ad aliquam
        aliquam non nemo voluptas. Sit molestiae doloribus At nemo repudiandae
        et reiciendis autem cum culpa optio ex ipsum eius et accusantium omnis
        At neque quaerat. Non magni quisquam Eum aperiam facilis Id quibusdam
        corporis et voluptate minus Qui internos impedit vel unde Lorem ipsum
        dolor Id quibusdam corporis et voluptate minus aut veniam quasi a magni
        incidunt in fuga distinctio et sunt autem et dolore dolor. Quo explicabo
        quidem aut esse suscipit ea inventore quia non nulla laborum non quia
        nemo est pariatur qui temporibus molestiae! Aut corporis distinctio ut
        aliquam eveniet et perferendis voluptate qui repellat quia. Est
        architecto assumenda cum ipsam architecto aut mollitia perferendis aut
        illum ullam ab praesentium animi.
      </p>
      <div className="m-4 text-slate-900 w-full">
        <hr className="bg-slate-900 h-0.5"/>
      </div>
      <div className="mt-4 mb-8 flex flex-row space-x-4 justify-center items-center">
        <Image
          className="block rounded-full mx-auto h-20 w-20 object-cover"
          src="/Ahmed.jpg"
          width={200}
          height={200}
          alt="user image"
        />
        <div className="flex flex-col h-full justify-evenly">
          <h1 className="font-bold text-xl" style={{ color: "#172B4D" }}>
            Ahmed Gamal
          </h1>
          <h5 className="text-x text-center" style={{ color: "#172B4D" }}>
            Front-end Specialists
          </h5>
        </div>
      </div>
    </div>
  );
}
