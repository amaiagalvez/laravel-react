import PageComponent from "../components/PageComponent";
import Survey from "../components/Survey";
import { UseStateContext } from "../contexts/ContextProvider";

export default function Surveys() {
  const { surveys } = UseStateContext()

  const onDeleteClick = () => {
    console.log('on delete click')
  }

  return (
    <PageComponent title="Surveys">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {surveys.map(survey => (
          <Survey survey={survey} key={survey.id} onDeleteClick={onDeleteClick} />
        ))}
      </div>
    </PageComponent>
  )
}