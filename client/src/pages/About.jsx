export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-10 text-center border-2 border-purple-600 rounded-lg">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7 ">
            This is Ayushman&apos;s Journal
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to Ayushman&apos;s Journal! This journal was created by
              Ayushman as a personal project to share his thoughts and ideas
              with the world. Ayushman is a passionate writer who loves to
              document his experiences, thoughts, and reflections.
            </p>

            <p>
              On this journal, you&apos;ll find weekly entries and reflections
              on various topics such as life experiences, personal growth, and
              insights into the world around us. Ayushman is dedicated to
              exploring new perspectives and sharing meaningful content with his
              readers.
            </p>

            <p>
              Feel free to explore the entries, leave comments, and engage with
              other readers. Your feedback and thoughts are valuable in
              fostering a supportive community of readers and writers. Together,
              we can create a space for learning, reflection, and connection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
