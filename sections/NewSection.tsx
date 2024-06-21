import { ImageWidget } from "apps/admin/widgets.ts";

interface Experience {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

interface Props {
  /**
   * @description The name of the person.
   */
  name?: string;
  /**
   * @description The title of the person.
   */
  title?: string;
  /**
   * @description The description of the person.
   * @format textarea
   */
  description?: string;
  /**
   * @description The profile image of the person.
   */
  profileImage?: ImageWidget;
  /**
   * @description The call to action button text.
   */
  ctaText?: string;
  ctaUrl?: string;
  ctaStyle?: string;
  /**
   * @description An array of experiences for the timeline
   */
  experiences?: Experience[];
  }

export default function AboutSection({
  name = "Tiago Gimenes",
  title = "Software Engineer",
  description =
    "Tiago Gimenes is a skilled software engineer with expertise in web development. He creates robust and scalable applications using modern technologies.",
  profileImage,
  ctaText = "Contact Me",
  ctaUrl = "#",
  ctaStyle = "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-4",
  experiences = [
    {
      title: "Senior Software Engineer",
      description: "Developed scalable web applications",
      startDate: "2020",
      endDate: "2023"
    },
    {
      title: "Full Stack Developer",
      description: "Built and maintained e-commerce platforms",
      startDate: "2018",
      endDate: "2020"
    },
    {
      title: "Junior Developer",
      description: "Contributed to various frontend projects",
      startDate: "2016",
      endDate: "2018"
    }
  ]
}: Props) {
  return (
    <section class="bg-white py-12 px-4">
      <div class="container mx-auto flex flex-col md:flex-row items-center">
        {profileImage && (
          <div class="md:w-1/3 mb-8 md:mb-0">
            <img
              src={profileImage}
              alt={name}
              class="rounded-full w-48 h-48 object-cover mx-auto"
            />
          </div>
        )}
        <div class="md:w-2/3 text-left">
          <h2 class="text-4xl font-bold mb-4">{name}</h2>
          <h3 class="text-2xl font-semibold text-gray-600 mb-4">{title}</h3>
          <p class="text-lg text-gray-700 mb-6">{description}</p>
          <div class="mt-4">
          <a href={ctaUrl} class={ctaStyle}>
            {ctaText}
          </a>
      </div>
      <div class="container mx-auto mt-12">
        <h3 class="text-2xl font-bold mb-6 mt-8">Experience</h3>
        <ul class="space-y-6">
          {experiences.map((experience, index) => (
            <li key={index}>
              <div class="flex flex-col items-start timeline-start timeline-box text-left">
                <h4 class="font-bold mb-1">{experience.title}</h4>
                <p class="text-sm text-gray-500">{experience.description}</p>
                <p class="text-xs text-gray-400 mt-1">{`${experience.startDate} - ${experience.endDate}`}</p>
              </div>
              {index !== experiences.length - 1 && <hr class="my-4"/>}
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </section>
  );
}