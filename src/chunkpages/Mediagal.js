import React from "react";

export default function Mediagal() {
  return (
    
      <section className="mx-16 mb-10">
        <h1 className="py-5 text-3xl text-center font-Poppins">Memories bring back</h1>
        <div className="grid gap-4">
          <div>
            <iframe
               width="100%"
        height="100%"
        title='team'
        src='https://www.youtube.com/embed/bwWgOLiBY-Q'
              className="w-full h-full rounded-lg aspect-video"
              alt=""
            />
            
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
  );
}
