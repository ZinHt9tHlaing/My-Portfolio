interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => (
  <div className="text-center mb-10 md:mb-16">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
      {title}
    </h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>
  </div>
);

export default SectionTitle;
