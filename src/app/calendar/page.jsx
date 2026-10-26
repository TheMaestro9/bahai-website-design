import Calendar from '@/views/calendar/Calendar';

export const metadata = {
  title: 'التقويم البهائي (البديع)',
  description: 'تقويم شمسي أسسه الباب، يتكون من ١٩ شهراً، في كل شهر ١٩ يوماً، بالإضافة إلى أيام الهاء الاستثنائية.',
};

export default function Page() {
  return <Calendar />;
}
