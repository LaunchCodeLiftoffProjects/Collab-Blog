package org.launchcode.blog.Blogs;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.launchcode.blog.tags.Tag;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Blog {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String header;
	private String subheader;
	private String author;
	private String image;
	@Column(length = 10000)
	private String body;
	private Date timestamp;
	@ManyToMany(cascade = CascadeType.PERSIST)
	private final List<Tag> tags = new ArrayList<>();
	
	public Blog(){}

	public Blog(String header, String subheader, String author, String image, String body){
		this.header = header;
		this.subheader = subheader;
		this.image = image;
		this.body = body;
	}
	
	public long getId() {
		return id;
	}
	
	public String getHeader() {
		return header;
	}
	
	public String getBody() {
		return body;
	}
	
	public void setBody(String body) {
		this.body = body;
	}
	
	public void setHeader(String header) {
		this.header = header;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getSubheader() {
		return subheader;
	}
	
	public void setSubheader(String subheader) {
		this.subheader = subheader;
	}
	
	public String getImage() {
		return image;
	}
	
	public void setImage(String image) {
		this.image = image;
	}
	
	public Date getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}

	public List<Tag> getTags() {
		return tags;
	}

	public void addTag(Tag tag){
		this.tags.add(tag);
	}

	@Override
	public String toString() {
		return "Blog{" +
				       "id=" + id +
				       ", header='" + header + '\'' +
				       ", subheader='" + subheader + '\'' +
				       ", author='" + author + '\'' +
				       ", image='" + image + '\'' +
				       ", body='" + body + '\'' +
				       ", timestamp=" + timestamp +
				       '}';
	}
}
