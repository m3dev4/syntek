import React from "react";
import Header from "@/components/shared/header";
import { transformationTypes } from "@/constants";
import TransformationForm from "@/components/shared/transformationForm";
import { auth } from "@clerk/nextjs";
import { getUserById } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const AddTransformationPage = async ({ params: { type } }: SearchParamProps) => {
  const { userId } = auth()
  const transformation = transformationTypes[type];

  if(!userId) redirect('/sign-in')

  const user = await getUserById(userId)
  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <TransformationForm 
       action="Add"
       userId={user.id}
       type={transformation.type as TransformationTypeKey}
       creditBalance={user.creditBalance}
      />
    </>
  );
};

export default AddTransformationPage;
