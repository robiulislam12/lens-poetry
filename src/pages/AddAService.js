import { Button, Label, TextInput, Card, Textarea } from 'flowbite-react'
import React from 'react'

const AddAService = () => {

    const handleSubmit = (e) => {

      e.preventDefault();

      const from = e.target;
      const title = from.title.value;
      const price = from.price.value;
      const photoURL = from.photo.value;
      const description = from.description.value;
      console.log({
        title,
        price,
        photoURL,
        description
      })

      // post service
      fetch('http://localhost:5000/services', {
        method: "POST",
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify({
          title,
          price,
          photoURL,
          description
        })
      })
      .then(res => res.json())
      .then(data => console.log(data))

      // reset from
      from.reset();
    }

  return (
    <div className="max-w-lg mx-auto py-12">
    <Card>
      <h3 className="text-2xl">Add a Service</h3>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Service Title" />
          </div>
          <TextInput
            id="title"
            name="title"
            type="text"
            placeholder="Service Title"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="photoUrl" value="Service photo url" />
          </div>
          <TextInput
            id="photoUrl"
            type="url"
            name="photo"
            placeholder="Service photo url"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Service Price" />
          </div>
          <TextInput
            id="price"
            type="number"
            name="price"
            placeholder="Service Price"
            required={true}
          />
        </div>
        <div id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="description" value="Service Details" />
              </div>
              <Textarea
                id="description"
                name='description'
                placeholder="Service details here, must be 300 character"
                required={true}
                rows={6}
              />
            </div>
        <Button type="submit">Add a service</Button>
      </form>
    </Card>
  </div>
  )
}

export default AddAService