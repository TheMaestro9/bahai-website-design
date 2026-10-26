import QuestionDetail from '@/views/questions/QuestionDetail';
import { questionsData, getQuestionBySlug } from '@/data/questionsData';

export function generateStaticParams() {
  return questionsData.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getQuestionBySlug(slug);
  if (!article) return { title: 'المقال غير موجود' };
  return { title: article.title, description: article.shortAnswer };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <QuestionDetail slug={slug} />;
}
