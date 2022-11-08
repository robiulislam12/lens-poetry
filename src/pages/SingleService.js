import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Img from "../assets/hero-bg.jpg";
import { Avatar, TextInput, Label, Button, Textarea } from "flowbite-react";
import useTitles from "../hooks/useTitles";

const SingleService = () => {
  // Set page title
  useTitles("Single Service");

  return (
    <div className="lg:w-3/4 mx-auto py-12 sm-p-4">
      <PhotoProvider>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-4xl mb-4">
            Noteworthy technology acquisitions 2021
          </h2>
          <PhotoView src={Img}>
            <img src={Img} alt="" className="rounded" />
          </PhotoView>
          <div className="py-4">
            <p className="text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              accusantium eligendi odit consectetur recusandae doloremque porro
              ullam, amet soluta, ad quae enim facilis aliquid. Minima hic
              officia eos quis? Illo, impedit? Atque dolorem modi impedit et
              cumque, iure nobis ab explicabo dolores ipsa id totam ea,
              repudiandae optio voluptatibus ullam! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Impedit exercitationem architecto,
              saepe amet enim cumque nesciunt doloribus ipsam accusamus at nemo
              aspernatur nam doloremque reprehenderit ab ea nihil quod nisi
              repudiandae. Optio itaque non maiores autem animi, blanditiis
              quasi laborum id sunt quo praesentium voluptas facilis vero
              quaerat illo architecto eius dolorum, asperiores consequatur, est
              maxime pariatur? Illum officia quo repudiandae. Debitis, nesciunt.
              Temporibus molestiae eos voluptas eveniet repudiandae autem qui,
              magni aut mollitia eligendi iure excepturi ipsa obcaecati totam
              atque, consectetur vitae recusandae aperiam et! Quas soluta
              accusamus dolorum deserunt, praesentium possimus maiores natus
              nisi, dignissimos similique, cupiditate expedita?
            </p>
          </div>
        </div>
      </PhotoProvider>
      <div className="bg-white p-4 rounded-lg shadow my-4">
        <h2 className="text-3xl font-semibold">All Reviews</h2>
        <div className="flex flex-wrap gap-2 py-4 border-b">
          <Avatar
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded={true}
            bordered={true}
          >
            <div className="font-medium dark:text-white">
              <div>Jese Leos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined in August 2014
              </div>
            </div>
          </Avatar>
          <p className="text-lg text-gray-500 pl-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            quisquam autem maiores voluptatibus, ducimus inventore dolores
            expedita vitae molestias beatae libero quos commodi est ut excepturi
            repellendus officiis quas blanditiis!
          </p>
        </div>
        <div className="flex flex-wrap gap-2 py-4 border-b">
          <Avatar
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded={true}
            bordered={true}
          >
            <div className="font-medium dark:text-white">
              <div>Jese Leos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined in August 2014
              </div>
            </div>
          </Avatar>
          <p className="text-lg text-gray-500 pl-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            quisquam autem maiores voluptatibus, ducimus inventore dolores
            expedita vitae molestias beatae libero quos commodi est ut excepturi
            repellendus officiis quas blanditiis!
          </p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow my-4">
        <h2 className="text-3xl font-semibold">Add your review</h2>
        <form className="flex flex-col gap-4 py-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="num" value="Add your ratings" />
            </div>
            <TextInput
              id="num"
              type="number"
              placeholder="Your rattings for this content"
              required={true}
              maxLength="1"
            />
          </div>
          <div id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Your message" />
            </div>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required={true}
              rows={4}
            />
          </div>
          <Button type="submit">Add a review</Button>
        </form>
      </div>
    </div>
  );
};

export default SingleService;
