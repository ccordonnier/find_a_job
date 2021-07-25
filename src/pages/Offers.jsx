import React from "react";
import Navbar from "../components/Navbar";

const Offers = () => {
  const posts = [
    {
      id: "1",
      name: "Développeur Front-end Javascript",
      company: "We Love Javascript",
      experience: "Junior/medior",
      skills: "Javascript, React, Redux",
      start: "ASAP",
      presence: "remote",
      salary: "35K/an",
    },
    {
      id: "2",
      name: "Back-end Développeur PHP/Symfony",
      company: "Symfony and cie",
      experience: "3 ans minimum",
      skills: "PHP, Symfony, Doctrine",
      start: "Septembre 2021",
      presence: "Présentiel",
      salary: "37K/an",
    },
    {
      id: "3",
      name: "UX Designer",
      company: "Fl-UX",
      experience: "6 ans minimum",
      skills: "Curieux, Créatif, Maitrise de la suite adobe",
      start: "ASAP",
      presence: "Télétravaille 2 jours / 5",
      salary: "40K/an",
    },
    {
      id: "4",
      name: "Développeur Front-end Javascript",
      company: "We Love Javascript",
      experience: "Junior/medior",
      skills: "Javascript, React, Redux",
      start: "ASAP",
      presence: "remote",
      salary: "35K/an",
    },
    {
      id: "5",
      name: "Back-end Développeur PHP/Symfony",
      company: "Symfony and cie",
      experience: "3 ans minimum",
      skills: "PHP, Symfony, Doctrine",
      start: "Septembre 2021",
      presence: "Présentiel",
      salary: "37K/an",
    },
    {
      id: "6",
      name: "UX Designer",
      company: "Fl-UX",
      experience: "6 ans minimum",
      skills: "Curieux, Créatif, Maitrise de la suite adobe",
      start: "ASAP",
      presence: "Télétravaille 2 jours / 5",
      salary: "40K/an",
    },
    {
      id: "7",
      name: "Développeur Front-end Javascript",
      company: "We Love Javascript",
      experience: "Junior/medior",
      skills: "Javascript, React, Redux",
      start: "ASAP",
      presence: "remote",
      salary: "35K/an",
    },
    {
      id: "8",
      name: "Back-end Développeur PHP/Symfony",
      company: "Symfony and cie",
      experience: "3 ans minimum",
      skills: "PHP, Symfony, Doctrine",
      start: "Septembre 2021",
      presence: "Présentiel",
      salary: "37K/an",
    },
    {
      id: "9",
      name: "UX Designer",
      company: "Fl-UX",
      experience: "6 ans minimum",
      skills: "Curieux, Créatif, Maitrise de la suite adobe",
      start: "ASAP",
      presence: "Télétravaille 2 jours / 5",
      salary: "40K/an",
    },
    {
      id: "10",
      name: "Développeur Front-end Javascript",
      company: "We Love Javascript",
      experience: "Junior/medior",
      skills: "Javascript, React, Redux",
      start: "ASAP",
      presence: "remote",
      salary: "35K/an",
    },

    // More people...
  ];

  return (
    <div className="flex flex-col">
      <Navbar />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Toutes les offres
          </h1>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6">
        <div className="relative flex items-center justify-between">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nom
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Compétences
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Expérience
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Début
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Présence
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Salaire
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {post.company}
                      </div>
                      <div className="text-sm text-gray-500">{post.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {post.skills}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {post.experience}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {post.start}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {post.presence}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {post.salary}
                    </td>
                    <td className="py-4 whitespace-nowrap text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Voir
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
